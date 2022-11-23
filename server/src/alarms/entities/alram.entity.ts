import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "alarm" })
export class Alarm {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "sender_user_id" })
  senderUserId!: number;

  @Column({ name: "alarm_type" })
  alarmType!: number;

  @Column({ name: "minute_stamp" })
  minuteStamp!: number;

  @Column({ name: "check" })
  check!: boolean;

  // FK
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user!: User;
}
