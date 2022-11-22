import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

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

  // TODO: 이미지 컬럼은 일단 보류
  // @Column({ name: "", length: 0 })
  // profileImage!: string;

  @Column({ nullable: true })
  tier!: number;

  @Column({ nullable: true, name: "follower_count" })
  followerCount!: number;

  @Column({ nullable: true, name: "following_count" })
  followingCount!: number;

  @Column({ nullable: true, name: "volume_sum" })
  volumeSum!: number;

  //! temp

  @Column({ nullable: true, length: 180 })
  email!: string;

  @Column({ nullable: true, length: 180 })
  profileImage!: string;

  @Column({ nullable: true, length: 180 })
  accessToken!: string;

  @Column({ nullable: true, length: 180 })
  refreshToken!: string;
}
