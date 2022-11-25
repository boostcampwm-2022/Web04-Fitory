import { Gender } from "@constants/enums";

export interface JoinUserInfo {
  name: string;
  age: number;
  gender: Gender;
  height: number;
  weight: number;
}
