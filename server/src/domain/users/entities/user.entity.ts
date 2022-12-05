import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  id!: number;

  @Column({ name: "oauth_id", length: 180 })
  oauthId!: string;

  @Column({ name: "profile_image", length: 180, default: "http://profile.image" }) // default value 추후 수정 필요
  profileImage!: string;

  @Column({ length: 45 })
  name!: string;

  @Column({})
  age!: number;

  @Column({})
  gender!: number;

  @Column({})
  height!: number;

  @Column({})
  weight!: number;

  @Column({ length: 180, default: "-" })
  introduce!: string;

  @Column({ default: 0 })
  tier!: number;

  @Column({ name: "follower_count", default: 0 })
  followerCount!: number;

  @Column({ name: "following_count", default: 0 })
  followingCount!: number;

  @Column({ name: "volume_sum", default: 0 })
  volumeSum!: number;
}
