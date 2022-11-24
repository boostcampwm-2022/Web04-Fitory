import { User } from "src/domain/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "exercise" })
export class Exercise {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "exercise_name", length: 45 })
  exerciseName!: string;

  @Column({ name: "exercise_string", length: 135 })
  exerciseString!: string;

  @Column({ name: "date", length: 45 })
  date!: string;

  // FK
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: "user_id" })
  user!: User;
}
