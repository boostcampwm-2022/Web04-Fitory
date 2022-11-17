import { Request } from "express";

export interface RequestType extends Request {
  user: string;
}
