import { Controller, Get, Query } from "@nestjs/common";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("get")
  async getUserInfo(@Query("id") id: number) {
    return this.usersService.getUserInfo(id);
  }
}
