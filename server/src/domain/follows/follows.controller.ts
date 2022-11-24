import { FollowsService } from "@follow/follows.service";
import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { isValidUserId } from "@validation/validation";
import { Exception } from "@exception/exceptions";

@Controller("api/follow")
@ApiTags("FOLLOW API")
export class FollowsController {
  constructor(private readonly followService: FollowsService) {}

  @Get("following")
  @ApiOperation({
    summary: "❌ 미구현) 해당 사용자가 팔로잉 하는 사용자들의 프로필 요약을 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  getFollowingUserList(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    return this.followService.getFollowingUserList(userId);
  }

  @Get("follower")
  @ApiOperation({
    summary: "❌ 미구현) 해당 사용자를 팔로우 하는 사용자들의 프로필 요약을 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  getFollowerUserList(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    return this.followService.getFollowerUserList(userId);
  }
}
