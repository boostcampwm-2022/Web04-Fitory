import { Controller, Get, Query, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiTags, ApiQuery } from "@nestjs/swagger";
import { isValidUserId } from "@validation/validation";
import { Exception } from "@exception/exceptions";
import { JwtAuthGuard } from "@oauth/jwt/jwt.guard";
import { User } from "@user/entities/user.entity";
import { UsersService } from "./users.service";
import { GetUserId } from "../../decorator/validate.decorator";

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
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    const userExist = await this.usersService.isExistUser(userId);
    if (!userExist) throw new Exception().userNotFound();
    return this.usersService.getUserInfo(userId);
  }

  @Get("profile/list")
  @ApiOperation({
    summary: "모든 사용자들의 프로필 요약 데이터를 반환",
  })
  getEveryUserName() {
    return this.usersService.getEveryUserProfile();
  }

  @Get("recommand/list")
  @ApiOperation({
    summary: "해당 사용자와 유사한 추천 사용자 리스트를 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getRecommandUserList(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    const userExist = await this.usersService.isExistUser(userId);
    if (!userExist) throw new Exception().userNotFound();
    return this.usersService.getRecommandUserList(userId);
  }

  @Get("checkName")
  @ApiOperation({
    summary: "유저 이름 중복 검사",
  })
  @ApiQuery({
    name: "userName",
  })
  checkUserName(@Query("userName") userName: string) {
    return this.usersService.checkUserName(userName);
  }

  @UseGuards(JwtAuthGuard)
  @Get("test")
  async getTest(@GetUserId() userId: User) {
    console.log(userId);
    return userId;
  }
}
