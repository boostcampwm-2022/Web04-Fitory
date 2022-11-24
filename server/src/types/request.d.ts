import { Request } from "express";
import { GoogleUserDto } from "../domain/oauth/google-oauth/dto/google-user.dto";

export interface RequestWithUser extends Request {
  user: GoogleUserDto;
}
