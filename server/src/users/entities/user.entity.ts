import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  id!: number;

  @Column({ name: "oauth_id", type: "bigint" })
  oauthId!: string;

  @Column({ name: "profile_image", length: 180 })
  profileImage!: string;

  @Column({ length: 45 })
  name!: string;

  @Column({ nullable: true })
  age!: number;

  @Column({ nullable: true })
  gender!: number;

  @Column({ nullable: true })
  height!: number;

  @Column({ nullable: true })
  weight!: number;

  @Column({ nullable: true, length: 180 })
  introduce!: string;

  @Column({ nullable: true })
  tier!: number;

  @Column({ nullable: true, name: "follower_count" })
  followerCount!: number;

  @Column({ nullable: true, name: "following_count" })
  followingCount!: number;

  @Column({ nullable: true, name: "volume_sum" })
  volumeSum!: number;
}
