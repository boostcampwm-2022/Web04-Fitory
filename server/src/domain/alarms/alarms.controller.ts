import { Controller, Get, Param, Query, Sse } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Exception } from "@exception/exceptions";
import { isValidUserId } from "@validation/validation";
import { UsersService } from "@user/users.service";
import { interval, map, Observable, switchMap } from "rxjs";
import { AlarmsService } from "./alarms.service";

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
  async sse(@Query("userId") userId: number): Promise<Observable<MessageEvent>> {
    return interval(1000).pipe(
      switchMap(async () => await this.alarmService.countUnreadAlarm(userId)),
      map((prop) => {
        return {
          data: { unreadAlarmCount: prop.response.alarmCount },
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
  async getAlarmList(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    return this.alarmService.getAlarmList(userId);
  }
}
