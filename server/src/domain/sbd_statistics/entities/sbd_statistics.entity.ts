import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "SBD_statistics" })
// eslint-disable-next-line @typescript-eslint/naming-convention
export class SBD_statistics {
  @PrimaryGeneratedColumn()
  id!: number;

  @Index()
  @Column({ name: "gender" })
  gender!: number;

  @Index()
  @Column({ name: "weight" })
  weight!: number;

  @Column({ name: "SBD_volume" })
  SBD_volume!: number;
}
