import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery } from "@nestjs/swagger";
import { UsersService } from "./users.service";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("get")
  @ApiOperation({
    summary: "해당 사용자의 모든 정보를 반환",
  })
  @ApiQuery({
    name: "id",
    type: "number",
  })
  async getUserInfo(@Query("id") id: number) {
    return this.usersService.getUserInfo(id);
  }
}
