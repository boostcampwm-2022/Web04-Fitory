import { UsersService } from "@user/users.service";
import { FollowsService } from "@follow/follows.service";
import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { isValidUserId } from "@validation/validation";
import { Exception } from "@exception/exceptions";

@Controller("api/follow")
@ApiTags("FOLLOW API")
export class FollowsController {
  constructor(
    private readonly followService: FollowsService,
    private readonly usersService: UsersService,
  ) {}

  @Get("following")
  @ApiOperation({
    summary: "해당 사용자가 팔로잉 하는 사용자들의 프로필 요약을 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getFollowingUserList(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    const userExist = await this.usersService.isExistUser(userId);
    if (!userExist) throw new Exception().userNotFound();
    return this.followService.getFollowingUserList(userId);
  }

  @Get("follower")
  @ApiOperation({
    summary: "해당 사용자를 팔로우 하는 사용자들의 프로필 요약을 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getFollowerUserList(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    const userExist = await this.usersService.isExistUser(userId);
    if (!userExist) throw new Exception().userNotFound();
    return this.followService.getFollowerUserList(userId);
  }
}
