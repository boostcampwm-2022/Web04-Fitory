import { JwtAuthGuard } from "@guard/jwt.guard";
import { Controller, Get, Req, Query, Sse } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Exception } from "@exception/exceptions";
import { isValidUserId } from "@validation/validation";
import { UsersService } from "@user/users.service";
import { interval, map } from "rxjs";
import { GetUserId, NoAuth } from "../../decorator/validate.decorator";
import { AlarmsService } from "./alarms.service";
import { RequestWithUser } from "../../types/request.d";

@Controller("api/alarms")
@ApiTags("ALARM API")
export class AlarmsController {
  constructor(
    private readonly alarmService: AlarmsService,
    private readonly usersService: UsersService,
  ) {}

  @Get("everyDate")
  @ApiOperation({
    summary: "해당 사용자가 읽지 않은 알림 수를 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getUnreadAlarmCount(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    return this.alarmService.countUnreadAlarm(userId);
  }

  // sse
  @Sse("unread")
  @ApiOperation({
    summary: "해당 사용자가 읽지 않은 알림 수를 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async sse(@Req() req: RequestWithUser) {
    return interval(1000).pipe(
      map(() => {
        const userId = Number(req.user);
        console.log(userId, global.alarmBar);
        let fetchAlarmSign = false;
        if (global.alarmBar.has(userId)) {
          fetchAlarmSign = true;
          global.alarmBar.delete(userId);
        }
        return {
          data: { fetchAlarmSign },
        } as MessageEvent;
      }),
    );
  }

  @Get("list")
  @ApiOperation({
    summary: "해당 사용자가 받은 알림 상세 정보 리스트를 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  @ApiQuery({
    name: "index",
    type: "number",
    required: false,
  })
  async getAlarmList(@Query("userId") userId: number, @Query("index") index: number | null) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    return this.alarmService.getAlarmList(userId, index);
  }

  @Get("test")
  async test(@GetUserId() userId: number) {
    console.log(userId);
  }
}
