import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "SBD_statistics" })
@Index("gender_weight_idx", ["gender", "weight"])
// eslint-disable-next-line @typescript-eslint/naming-convention
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
