import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 45 })
  name!: string;

  @Column()
  age!: number;

  @Column()
  gender!: number;

  @Column()
  height!: number;

  @Column()
  weight!: number;

  @Column({ length: 180 })
  introduce!: string;

  // TODO: 이미지 컬럼은 일단 보류
  // @Column({ name: "", length: 0 })
  // profileImage!: string;

  @Column()
  tier!: number;

  @Column({ name: "follower_count" })
  followerCount!: number;

  @Column({ name: "following_count" })
  followingCount!: number;

  @Column({ name: "volume_sum" })
  volumeSum!: number;

  //! temp

  @Column({ length: 180 })
  email!: string;

  @Column({ length: 180 })
  profileImage!: string;

  @Column({ length: 180 })
  accessToken!: string;

  @Column({ length: 180 })
  refreshToken!: string;
}
