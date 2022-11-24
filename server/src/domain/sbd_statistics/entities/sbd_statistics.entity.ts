import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "SBD_statistics" })
export class SBD_statistics {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "gender" })
  gender!: number;

  @Column({ name: "weight" })
  weight!: number;

  @Column({ name: "SBD_volume" })
  SBD_volume!: number;
}
