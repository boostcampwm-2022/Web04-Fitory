export type UserName = string;
export type UserAge = number;
export type UserGender = 0 | 1;
export type UserHeight = number;
export type UserWeight = number;
export type UserId = number;
export type UserIntroduce = string;

export interface LoginResponse {
  userId: number | null;
  needRegister: boolean;
}

export interface JoinUserInfo {
  name: UserName;
  age: UserAge;
  gender: UserGender;
  height: UserHeight;
  weight: UserWeight;
}

export interface UserInfo extends JoinUserInfo {
  profileImage: string;
  introduce: string;
  tier: number;
  followerCount: number;
  followingCount: number;
  volumeSum: number;
}

export interface SearchedUserInfo {
  user_user_id?: UserId;
  user_name: UserName;
  user_introduce?: UserIntroduce;
  user_profile?: string;
}
