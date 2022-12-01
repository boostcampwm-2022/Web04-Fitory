import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "follow" })
export class Follow {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "follower_id" })
  followerId!: number;

  @Column({ name: "followed_id" })
  followedId!: number;

  @Column({ name: "deleted" })
  deleted!: boolean;
}
