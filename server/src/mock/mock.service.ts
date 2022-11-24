import { Injectable } from "@nestjs/common";
import fs from "fs";
import { faker } from "@faker-js/faker";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import dayjs from "dayjs";
import { OpenDataType } from "../types/openDataStatistics";
import { User } from "../users/entities/user.entity";
import { SBD_record } from "../sbd_records/entities/sbd_record.entity";
import { SBD_statistics } from "../sbd_statistics/entities/sbd_statistics.entity";
import { Routine } from "../routines/entities/routine.entity";
import { Follow } from "../follows/entities/follow.entity";
import { Exercise } from "../exercises/entities/exercise.entity";
import { Alarm } from "../alarms/entities/alram.entity";

faker.locale = "ko";

@Injectable()
export class MockService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(SBD_record)
    private recordsRepository: Repository<SBD_record>,
    @InjectRepository(SBD_statistics)
    private statisticsRepository: Repository<SBD_statistics>,
    @InjectRepository(Routine)
    private routineRepository: Repository<Routine>,
    @InjectRepository(Follow)
    private followRepository: Repository<Follow>,
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
    @InjectRepository(Alarm)
    private alarmRepository: Repository<Alarm>,
  ) {}

  async getOpenData(file: string) {
    const data: OpenDataType[] = [];

    let fileName;
    if (file === "fillna") fileName = "src/mock/open-powerlifting-fillna.csv";
    else if (file === "sampling") fileName = "src/mock/open-powerlifting-sampling.csv";
    const csvFile = fs.readFileSync(fileName, "utf8");
    const csvSplits = csvFile.toString().split("\n");

    for (let i = 0; i < csvSplits.length; i += 1) {
      const csvData = csvSplits[i].split(",");

      let gender;
      if (csvData[0] === "M") gender = 0;
      else if (csvData[0] === "F") gender = 1;

      const sbd = csvData[1];
      const weight = Math.floor(+csvData[3]);
      const total = Math.floor(+csvData[8] / 2);

      if (sbd === "SBD" && weight && total) {
        data.push({
          gender,
          weight,
          total,
        });
      }
    }
    return data;
  }

  async mockUsers(num: number[]) {
    return Promise.all(
      num.map(async (id: number) => {
        const following = await this.followRepository
          .createQueryBuilder()
          .where("follower_id = :id", { id })
          .select("follower_id")
          .getRawMany();

        const follower = await this.followRepository
          .createQueryBuilder()
          .where("followed_id = :id", { id })
          .select("followed_id")
          .getRawMany();

        return this.userRepository
          .createQueryBuilder()
          .insert()
          .into(User)
          .values({
            name: faker.name.lastName() + faker.name.firstName(),
            age: faker.datatype.number({ min: 10, max: 60 }),
            gender: faker.datatype.number({ min: 0, max: 1 }),
            height: faker.datatype.number({ min: 150, max: 200 }),
            weight: faker.datatype.number({ min: 50, max: 150 }),
            introduce: faker.lorem.sentence(),
            volumeSum: faker.datatype.number({ min: 0, max: 100000 }),
            tier: faker.datatype.number({ min: 0, max: 6 }),
            followerCount: follower.length,
            followingCount: following.length,
            oauthId: faker.datatype.number({ min: 0, max: 999999999 }).toString(),
            profileImage: "http://default.image",
          })
          .execute();
      }),
    );
  }

  async mockRecord() {
    const allUserId = await this.userRepository.createQueryBuilder().select("user_id").getRawMany();

    return Promise.all(
      allUserId.map(async (id: { user_id: number }) => {
        const weight = await this.userRepository
          .createQueryBuilder()
          .where("user_id = :id", { id })
          .select("weight")
          .getOne();
        const squat = faker.datatype.number({ min: 20, max: 300 });
        const deadlift = faker.datatype.number({ min: 20, max: 300 });
        const benchpress = faker.datatype.number({ min: 20, max: 300 });
        return this.recordsRepository
          .createQueryBuilder()
          .insert()
          .into(SBD_record)
          .values({
            user: { id: id.user_id },
            userWeight: Number(weight),
            squat,
            deadlift,
            benchpress,
            SBD_sum: squat + deadlift + benchpress,
            secondStamp: Number(
              Math.floor(new Date(faker.date.recent(30).toString()).getTime() / 1000),
            ),
            date: dayjs(faker.date.recent(365).toString()).format("YYMMDD"),
          })
          .insert()
          .execute();
      }),
    );
  }

  async mockStatistics() {
    const allOpenData = await this.getOpenData("sampling");
    return Promise.all(
      allOpenData.map((data: OpenDataType) => {
        return this.statisticsRepository
          .createQueryBuilder()
          .insert()
          .into(SBD_statistics)
          .values({ gender: data.gender, weight: data.weight, SBD_volume: data.total })
          .execute();
      }),
    );
  }

  async mockRoutine() {
    const allUserId = await this.userRepository.createQueryBuilder().select("user_id").getRawMany();

    return Promise.all(
      allUserId.map(async (id: { user_id: number }) => {
        return this.routineRepository
          .createQueryBuilder()
          .insert()
          .into(Routine)
          .values({
            user: { id: id.user_id },
            routineName: `${faker.lorem.word()} 루틴`,
            exerciseName: `${faker.lorem.word()} 운동`,
            // 기본 3세트
            exerciseString: `${faker.datatype.number({
              min: 20,
              max: 300,
            })}/${faker.datatype.number({ min: 1, max: 10 })}|${faker.datatype.number({
              min: 20,
              max: 300,
            })}/${faker.datatype.number({ min: 1, max: 10 })}|${faker.datatype.number({
              min: 20,
              max: 300,
            })}/${faker.datatype.number({ min: 1, max: 10 })}`,
          })
          .execute();
      }),
    );
  }

  async mockFollow(userNums: number[]) {
    return this.followRepository
      .createQueryBuilder()
      .insert()
      .into(Follow)
      .values({
        followedId: faker.helpers.arrayElement(userNums),
        followerId: faker.helpers.arrayElement(userNums),
      })
      .execute();
  }

  async mockExercise() {
    const allUserId = await this.userRepository.createQueryBuilder().select("user_id").getRawMany();

    return Promise.all(
      allUserId.map(async (id: { user_id: number }) => {
        return this.exerciseRepository
          .createQueryBuilder()
          .insert()
          .into(Exercise)
          .values({
            user: { id: id.user_id },
            exerciseName: `${faker.lorem.word()} 운동`,
            // 기본 3세트
            exerciseString: `${faker.datatype.number({
              min: 20,
              max: 300,
            })}/${faker.datatype.number({ min: 1, max: 10 })}/${faker.datatype.number({
              min: 0,
              max: 1,
            })}|${faker.datatype.number({ min: 20, max: 300 })}/${faker.datatype.number({
              min: 1,
              max: 10,
            })}/${faker.datatype.number({ min: 0, max: 1 })}|${faker.datatype.number({
              min: 20,
              max: 300,
            })}/${faker.datatype.number({ min: 1, max: 10 })}/${faker.datatype.number({
              min: 0,
              max: 1,
            })}`,
            date: dayjs(faker.date.recent(90).toString()).format("YYMMDD"),
          })
          .execute();
      }),
    );
  }

  async mockAlarm() {
    const allUserId = await this.userRepository.createQueryBuilder().select("user_id").getRawMany();
    const userIdArray: number[] = [];
    allUserId.map((id: { user_id: number }) => userIdArray.push(id.user_id));

    return Promise.all(
      allUserId.map(async (id: { user_id: number }) => {
        return this.alarmRepository
          .createQueryBuilder()
          .insert()
          .into(Alarm)
          .values({
            user: { id: id.user_id },
            senderUserId: faker.helpers.arrayElement(userIdArray),
            alarmType: faker.datatype.number({ min: 0, max: 1 }),
            check: false,
            minuteStamp: Number(
              Math.floor(new Date(faker.date.recent(7).toString()).getTime() / 1000 / 60),
            ),
          })
          .execute();
      }),
    );
  }
}
