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

  @Column({ name: "date", length: 45 })
  date!: string;

  @Column({ name: "check" })
  check!: boolean;

  // FK
  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user!: User;
}
