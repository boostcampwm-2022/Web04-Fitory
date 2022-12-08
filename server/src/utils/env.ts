import dotenv from "dotenv";

dotenv.config({ path: "/root/Web04-Fitory/server/.env" });

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
  DEPLOY_HOST_WWW,
  DEPLOY_HOST,
  LOCAL_HOST,
} = process.env;
