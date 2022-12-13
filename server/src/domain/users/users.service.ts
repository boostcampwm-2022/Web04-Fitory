import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { HttpResponse } from "@converter/response.converter";
import { Exception } from "@exception/exceptions";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { v4 as uuid } from "uuid";
import { extname } from "path";
import CryptoJS from "crypto-js";
import { User } from "./entities/user.entity";
import { UserProfileDto } from "./dto/user_profile.dto";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async isExistUser(userId: number) {
    const userExist = await this.userRepository
      .createQueryBuilder("user")
      .where("user.user_id = :userId", { userId })
      .getOne();
    return !!userExist;
  }

  async getUserInfo(userId: number, followerCount: number, followingCount: number) {
    const userObject = await this.userRepository
      .createQueryBuilder("user")
      .where("user.id = :userId", { userId })
      .getOne();
    const user = {
      ...userObject,
      followerCount,
      followingCount,
    };
    if (!user) {
      throw new Exception().userNotFound();
    }
    return HttpResponse.success({
      user,
    });
  }

  async searchUserByName(userName: string) {
    const userProfileList = await this.userRepository
      .createQueryBuilder("user")
      .select(["user.userId", "user.name", "user.introduce", "user.profileImage"])
      .where(`MATCH(user.name) AGAINST ("+${userName}" IN BOOLEAN MODE)`)
      .getMany();

    return HttpResponse.success({
      userProfileList,
    });
  }

  async checkUserName(name: string) {
    const userExists = await this.findUserByName(name);
    return HttpResponse.success({ userExists });
  }

  async findUserByName(name: string) {
    const user = await this.userRepository
      .createQueryBuilder("user")
      .where("user.name = :name", { name })
      .getOne();
    return !!user;
  }

  async getRecommandUserList(userId: number) {
    const userObject = await this.userRepository
      .createQueryBuilder("user")
      .select("user.weight", "weight")
      .addSelect("user.age", "age")
      .where("user.user_id = :userId", { userId })
      .getRawOne();

    const { age, weight } = userObject;

    const recommendWeight = await this.userRepository
      .createQueryBuilder("user")
      .where(`user.weight BETWEEN ${weight - 5} AND ${weight + 5}`)
      .andWhere("user.user_id != :userId", { userId })
      .select("user.user_id", "user_id")
      .addSelect("user.name", "name")
      .addSelect("user.profile_image")
      .orderBy("rand()")
      .take(5)
      .getRawMany();

    const recommendAge = await this.userRepository
      .createQueryBuilder("user")
      .where(`user.age BETWEEN ${age - 1} AND ${age + 1}`)
      .andWhere("user.user_id != :userId", { userId })
      .select("user.user_id", "user_id")
      .addSelect("user.name", "name")
      .addSelect("user.profile_image")
      .orderBy("rand()")
      .take(5)
      .getRawMany();

    return HttpResponse.success({ recommendWeight, recommendAge });
  }

  async updateUserProfile(userProfileData: UserProfileDto, filePath: string) {
    try {
      const userObject = await this.userRepository
        .createQueryBuilder("user")
        .where("user.user_id = :userId", { userId: userProfileData.userId })
        .getOne();
      userObject.profileImage = filePath;
      userObject.name = userProfileData.name;
      userObject.age = userProfileData.age;
      userObject.gender = userProfileData.gender;
      userObject.height = userProfileData.height;
      userObject.weight = userProfileData.weight;
      userObject.introduce = userProfileData.introduce;
      await this.userRepository.save(userObject);
      return HttpResponse.success({
        message: "Profile Update Success",
      });
    } catch (error) {
      throw new Exception().invalidSubmit();
    }
  }

  async getExistProfileImageLink(userId: number) {
    const { profileImageLink } = await this.userRepository
      .createQueryBuilder("user")
      .select("user.profile_image", "profileImageLink")
      .where("user.user_id = :userId", { userId })
      .getRawOne();
    const fileName = profileImageLink.split("/").at(-1);
    return fileName === "default.image" ? undefined : fileName;
  }

  async uploadFiles(file: Express.Multer.File, userId: number) {
    const uploadFolder = "user_profiles";
    try {
      const newFileHash = CryptoJS.MD5(CryptoJS.enc.Utf8.parse(file.buffer.toString())).toString();
      const existFileName = await this.getExistProfileImageLink(userId);

      if (!existsSync(uploadFolder)) {
        mkdirSync(uploadFolder);
      }

      let existFileBuffer: Buffer;
      if (existFileName && existsSync(`${uploadFolder}/${existFileName}`)) {
        existFileBuffer = readFileSync(`${uploadFolder}/${existFileName}`);
      }

      let existFileHash: string;
      if (existFileBuffer) {
        existFileHash = CryptoJS.MD5(
          CryptoJS.enc.Utf8.parse(existFileBuffer.toString()),
        ).toString();
      }

      let newFileName;
      if (newFileHash !== existFileHash) {
        if (!existFileName) {
          newFileName = `${uuid()}${extname(file.originalname)}`;
          writeFileSync(`${uploadFolder}/${newFileName}`, file.buffer);
        } else {
          newFileName = existFileName;
          writeFileSync(`${uploadFolder}/${newFileName}`, file.buffer);
        }
      }

      let filePath;
      if (newFileName) {
        const serverAddress = "http://localhost:8080";
        filePath = `${serverAddress}/user_profiles/${newFileName}`;
      }
      return filePath;
    } catch (error) {
      throw new Exception().fileSubmitError();
    }
  }
}
