import { UsersService } from "@user/users.service";
import { FollowsService } from "@follow/follows.service";
import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { isValidUserId } from "@validation/validation";
import { Exception } from "@exception/exceptions";
import { FollowUserIdDto } from "./dto/follow.dto";
import { AlarmsService } from "@alarm/alarms.service";
import { EventService } from "../event/event.service";

@Controller("api/follow")
@ApiTags("FOLLOW API")
export class FollowsController {
  constructor(
    private readonly followService: FollowsService,
    private readonly usersService: UsersService,
    private readonly alarmsService: AlarmsService,
    private readonly eventService: EventService,
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
    return this.followService.getFollowerUserList(userId);
  }

  @Post("doFollow")
  @ApiOperation({
    summary: "다른 사용자를 팔로잉 했을때 이를 등록",
  })
  async doFollow(@Body() userIds: FollowUserIdDto) {
    const { myUserId, otherUserId } = userIds;
    const myUserIdExist = await this.usersService.isExistUser(myUserId);
    const otherUserIdExist = await this.usersService.isExistUser(otherUserId);
    if (!myUserIdExist || !otherUserIdExist) throw new Exception().userNotFound();
    if (myUserId === otherUserId) throw new Exception().invalidSubmit();
    await this.alarmsService.sendFollowAlarm(myUserId, otherUserId);
    this.eventService.emit([otherUserId]);
    return this.followService.doFollow(userIds);
  }

  @Post("cancel")
  @ApiOperation({
    summary: "다른 사용자를 팔로우 취소 했을때 이를 등록",
  })
  async cancelFollow(@Body() userIds: FollowUserIdDto) {
    const myUserIdExist = await this.usersService.isExistUser(userIds.myUserId);
    const otherUserIdExist = await this.usersService.isExistUser(userIds.otherUserId);
    if (!myUserIdExist || !otherUserIdExist) throw new Exception().userNotFound();
    return this.followService.cancelFollow(userIds);
  }
}
