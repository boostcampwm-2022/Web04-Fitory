import { Follow } from "../domain/follows/entities/follow.entity";
import { SBD_statistics } from "../domain/sbd_statistics/entities/sbd_statistics.entity";
import { SBD_record } from "../domain/sbd_records/entities/sbd_record.entity";
import { Alarm } from "../domain/alarms/entities/alram.entity";
import { Exercise } from "../domain/exercises/entities/exercise.entity";
import { Routine } from "../domain/routines/entities/routine.entity";
import { User } from "../domain/users/entities/user.entity";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } from "../utils/env";

export const typeormConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PWD,
  database: DB_NAME,
  entities: [User, Routine, Exercise, Alarm, SBD_record, SBD_statistics, Follow],
  synchronize: false,
  logging: true,
};
