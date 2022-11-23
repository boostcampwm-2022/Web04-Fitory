import { Injectable } from "@nestjs/common";
import path from "path";
import fs from "fs";
import { faker } from "@faker-js/faker";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DataType } from "../types/openData";
import { User } from "../users/entities/user.entity";
import { SBD_record } from "../sbd_records/entities/sbd_record.entity";

faker.locale = "ko";

@Injectable()
export class MockService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(SBD_record)
    private recordsRepository: Repository<SBD_record>,
  ) {}

  async getOpenData(n: number) {
    const data: DataType[] = [];

    const csvFile = fs.readFileSync("src/mock/open-powerlifting-fillna.csv", "utf8");
    const csvSplit = csvFile.toString().split("\n");

    for (let i = 0; i < n; i += 1) {
      const csvData = csvSplit[i].split(",");
      console.log(csvData);
      const name = faker.name.lastName() + faker.name.firstName();

      let gender;
      if (csvData[0] === "M") gender = 0;
      else if (csvData[0] === "F") gender = 1;

      const sbd = csvData[1];
      const age = Math.floor(+csvData[2]);
      const weight = Math.floor(+csvData[3]);
      const squat = Math.floor(+csvData[5]);
      const bench = Math.floor(+csvData[6]);
      const deadlift = Math.floor(+csvData[7]);
      const total = Math.floor(+csvData[8]);

      if (sbd === "SBD" && age && weight && squat && bench && deadlift && total) {
        data.push({
          name,
          gender,
          age,
          weight,
          squat,
          bench,
          deadlift,
          total,
        });
      }
    }
    return data;
  }

  async mockUsers(dataList: DataType[]) {
    return Promise.all(
      dataList.map((data: DataType) => {
        console.log(data);
        return this.userRepository
          .createQueryBuilder("user")
          .insert()
          .into(User)
          .values({
            name: data.name,
            age: data.age,
            gender: data.gender,
            height: data.weight + 100,
            weight: data.weight,
            introduce: faker.lorem.sentence(),
            volumeSum: faker.datatype.number({ min: 0, max: 100000 }),
            tier: faker.datatype.number({ min: 0, max: 6 }),
            followerCount: faker.datatype.number({ min: 0, max: 1000 }),
            followingCount: faker.datatype.number({ min: 0, max: 1000 }),
            oauthId: faker.datatype.number({ min: 0, max: 999999999 }).toString(),
          })
          .execute();
      }),
    );
  }
}
