import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Exception } from "src/exception/exceptions";
import { isValidUserId } from "src/validation/validation";
import { AlarmsService } from "./alarms.service";

@Controller("api/alarms")
@ApiTags("ALARM API")
export class AlarmsController {
  constructor(private readonly alarmService: AlarmsService) {}

  @Get("everyDate")
  @ApiOperation({
    summary: "해당 사용자가 읽지 않은 알림 수를 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  getUnreadAlarmCount(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    return this.alarmService.countUnreadAlarm(userId);
  }
}
