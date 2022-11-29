export type UserName = string;
export type UserAge = number;
export type UserGender = 0 | 1;
export type UserHeight = number;
export type UserWeight = number;
export type UserId = number;
export type UserIntroduce = string;

export interface LoginResponse {
  oauthId: number;
  validate: boolean;
}

export interface JoinUserInfo {
  oauthId: number;
  name: UserName;
  age: UserAge;
  gender: UserGender;
  height: UserHeight;
  weight: UserWeight;
}

export interface SearchedUserInfo {
  user_user_id?: UserId;
  user_name: UserName;
  user_introduce?: UserIntroduce;
}
