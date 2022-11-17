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
  entities: [],
  synchronize: false,
};
