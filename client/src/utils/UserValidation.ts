import { Gender, UserName, UserAge, UserHeight, UserWeight } from "@constants/enums";
import * as UserType from "src/types/user";

const UserValidation = {
  checkNicknameValidation: (nickname: UserType.UserName) => {
    return nickname.length >= UserName.MIN && nickname.length <= UserName.MAX;
  },

  checkAgeGenderValidation: ({
    age,
    gender,
  }: {
    age: UserType.UserAge;
    gender: UserType.UserGender;
  }) => {
    return (
      age >= UserAge.MIN &&
      age <= UserAge.MAX &&
      (gender === Gender.MALE || gender === Gender.FEMALE)
    );
  },

  checkBodyInfoValidation: ({
    height,
    weight,
  }: {
    height: UserType.UserHeight;
    weight: UserType.UserWeight;
  }) => {
    return (
      height >= UserHeight.MIN &&
      height <= UserHeight.MAX &&
      weight >= UserWeight.MIN &&
      weight <= UserWeight.MAX
    );
  },
};

export default UserValidation;
