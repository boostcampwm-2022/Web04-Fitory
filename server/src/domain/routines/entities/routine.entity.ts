import { User } from "@user/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "routine" })
export class Routine {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "routine_name", length: 45 })
  routineName!: string;

  @Column({ name: "exercise_name", length: 45 })
  exerciseName!: string;

  @Column({ name: "exercise_string", length: 135 })
  exerciseString!: string;

  @Column({ name: "deleted", default: false })
  deleted!: boolean;

  // FK
  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: "user_id", referencedColumnName: "id" })
  user!: User;
}
