import { User } from "src/domain/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "SBD_record" })
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

  @Column({ name: "date", length: 45 })
  date!: string;

  @Column({ name: "second_stamp" })
  secondStamp!: number;

  @Column({ name: "user_weight" })
  userWeight!: number;

  // FK
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: "user_id" })
  user!: User;
}
