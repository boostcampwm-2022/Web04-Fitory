import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd() as string, ".env") });

export const {
  ACCESS_TOKEN_SECRETKEY,
  ACCESS_TOKEN_EXPIRESIN,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PWD,
  DB_NAME,
  HOST,
} = process.env;
