import { Controller, Get, Req, Query, Sse } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { AlarmsService } from "./alarms.service";

@Controller("api/alarms")
@ApiTags("ALARM API")
export class AlarmsController {
  constructor(private readonly alarmService: AlarmsService) {}

  @Get("static/unread")
  @ApiOperation({
    summary: "해당 사용자가 읽지 않은 알림 수를 정적으로 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getUnreadAlarmCount(@Query("userId") userId: number) {
    return this.alarmService.countUnreadAlarm(userId);
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
    return this.alarmService.getAlarmList(userId, index);
  }
}
