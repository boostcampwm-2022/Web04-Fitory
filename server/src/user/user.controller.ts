import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { Response } from "express";
import { CreateUserDto } from "./dto/create-user.dto";
// import { UserType } from "../types/user.type";
import { UserService } from "./user.service";

@Controller("api/user")
export class UserController {
  constructor(private usersService: UserService) {}

  @Post("register")
  async createUser(@Body() userInfo: CreateUserDto, @Res() response: Response): Promise<void> {
    await this.usersService.createUser(userInfo);

    response.status(202).send();
  }

  @Get("get/:userId")
  async getUserInfo(@Param("userId") userId: string): Promise<string> {
    return userId;
  }

  @Get("submitCheck/:userId")
  async getUserChallengeTimestamp(@Param("userId") userId: string): Promise<string> {
    return userId;
  }
}
