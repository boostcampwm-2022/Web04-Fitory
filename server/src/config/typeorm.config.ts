import { Follow } from "./../follows/entities/follow.entity";
import { SBD_statistics } from "./../sbd_statistics/entities/sbd_statistics.entity";
import { SBD_record } from "./../sbd_records/entities/sbd_record.entity";
import { Alarm } from "./../alarms/entities/alram.entity";
import { Exercise } from "./../exercises/entities/exercise.entity";
import { Routine } from "./../routines/entities/routine.entity";
import { User } from "./../users/entities/user.entity";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import dotenv from "dotenv";
dotenv.config();

export const typeormConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  entities: [User, Routine, Exercise, Alarm, SBD_record, SBD_statistics, Follow],
  synchronize: true,
  logging: true,
};
