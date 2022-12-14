import { User } from "@user/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "SBD_record" })
// eslint-disable-next-line @typescript-eslint/naming-convention
export class SBD_record {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "squat" })
  squat!: number;

  @Column({ name: "deadlift" })
  deadlift!: number;

  @Column({ name: "benchpress" })
  benchpress!: number;

  @Column({ name: "SBD_sum" })
  SBD_sum!: number;

  @CreateDateColumn({
    name: "time_stamp",
    type: "timestamp",
  })
  timeStamp: Date;

  @Column({ name: "user_weight" })
  userWeight!: number;

  // FK
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: "user_id" })
  user!: User;
}
