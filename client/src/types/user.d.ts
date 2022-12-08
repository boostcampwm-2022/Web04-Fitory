export type UserId = number;
export type UserName = string;
export type UserAge = number;
export type UserGender = 0 | 1;
export type UserHeight = number;
export type UserWeight = number;
export type UserIntroduce = string;

export interface LoginResponse {
  userId: UserId;
  needRegister: boolean;
}

export interface JoinResponse {
  myUserId: UserId;
  otherUserId: UserId;
  register: "success";
}

export interface FollowResponse {
  userId: UserId;
  register: "success";
}

export interface LoginUserInfo {
  access_token: string;
}

export interface JoinUserInfo extends LoginUserInfo {
  name: UserName;
  age: UserAge;
  gender: UserGender;
  height: UserHeight;
  weight: UserWeight;
}

export interface UserInfo extends JoinUserInfo {
  id: number;
  profileImage: string;
  introduce: string;
  tier: number;
  followerCount: number;
  followingCount: number;
  volumeSum: number;
}

export interface SearchedUserInfo {
  user_id?: UserId;
  name: UserName;
  introduce?: UserIntroduce;
  profile_image?: string;
  follower_id?: UserId;
  followed_id?: UserId;
}

export interface FollowUserInfo {
  myUserId: UserId;
  otherUserId: UserId;
}
