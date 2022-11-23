import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiOperation, ApiTags, ApiQuery } from "@nestjs/swagger";
import { UsersService } from "./users.service";
import { UsersInfoDto } from "./dto/users-info.dto";

@Controller("api/users")
@ApiTags("USER API")
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
  async getUserInfo(@Query("id") userId: number) {
    return this.usersService.getUserInfo(userId);
  }

  @Get("nameList")
  @ApiOperation({
    summary: "모든 사용자들의 이름을 반환",
  })
  async getEveryUserName() {
    return this.usersService.findEveryUserName();
  }

  @Post("register")
  @ApiOperation({
    summary: "사용자 정보 user 테이블에 등록",
  })
  async registerUser(@Body() userInfo: UsersInfoDto) {
    return this.usersService.registerUser(userInfo);
  }
}
