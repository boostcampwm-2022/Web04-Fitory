import { User } from "@user/entities/user.entity";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "alarm" })
export class Alarm {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "sender_user_id" })
  senderUserId!: number;

  @Column({ name: "alarm_type" })
  alarmType!: number;

  @CreateDateColumn({
    name: "time_stamp",
    type: "timestamp",
  })
  timeStamp: Date;

  @Column({ name: "check" })
  check!: boolean;

  // FK
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user!: User;
}
