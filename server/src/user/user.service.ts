import { Injectable } from "@nestjs/common";
import { UserType } from "../types/user.type";

@Injectable()
export class UserService {
  async createUser({
    profileImage,
    name,
    age,
    gender,
    height,
    weight,
    introduce,
    challengeTimestamp,
  }: UserType) {
    console.log(profileImage, name, age, gender, height, weight, introduce, challengeTimestamp);
    // TODO: DB 연동 후 구현
  }
  // private checkUserExists();
  // private saveUser();
}
