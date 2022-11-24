import { Follow } from "./../follows/entities/follow.entity";
import { SBD_statistics } from "./../sbd_statistics/entities/sbd_statistics.entity";
import { SBD_record } from "./../sbd_records/entities/sbd_record.entity";
import { Alarm } from "./../alarms/entities/alram.entity";
import { Exercise } from "./../exercises/entities/exercise.entity";
import { Routine } from "./../routines/entities/routine.entity";
import { User } from "./../users/entities/user.entity";
import { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } from "../utils/env";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  username: DB_USER,
  password: DB_PWD,
  database: DB_NAME,
  entities: [User, Routine, Exercise, Alarm, SBD_record, SBD_statistics, Follow],
});
