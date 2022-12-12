import { Follow } from "@follow/entities/follow.entity";
import { SBD_statistics } from "@statistics/entities/sbd_statistics.entity";
import { SBD_record } from "@record/entities/sbd_record.entity";
import { Alarm } from "@alarm/entities/alram.entity";
import { Exercise } from "@exercise/entities/exercise.entity";
import { Routine } from "@routine/entities/routine.entity";
import { User } from "@user/entities/user.entity";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
import { DB_HOST, DB_PORT, DB_USER, DB_PWD, DB_NAME } from "@utils/env";
import { DataSourceOptions } from "typeorm";

export const typeormConfig: TypeOrmModuleOptions | DataSourceOptions = {
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
