import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.env.PWD as string, ".env") });

export const {
  ACCESS_TOKEN_SECRETKEY,
  REFRESH_TOKEN_SECRETKEY,
  ALGORITHM,
  ACCESS_TOKEN_EXPIRESIN,
  REFRESH_TOKEN_EXPIRESIN,
  ISSUER,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT,
  MYSQL_HOST,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DB,
  PORT,
} = process.env;
