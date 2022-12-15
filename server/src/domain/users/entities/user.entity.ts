import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn({ name: "user_id" })
  id!: number;

  @Index()
  @Column({ name: "oauth_id", length: 180 })
  oauthId!: string;

  @Column({ name: "profile_image", length: 180, default: "http://profile.image" }) // default value 추후 수정 필요
  profileImage!: string;

  @Index({ fulltext: true, parser: "ngram" })
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

  @Column({ name: "volume_sum", default: 0 })
  volumeSum!: number;
}
