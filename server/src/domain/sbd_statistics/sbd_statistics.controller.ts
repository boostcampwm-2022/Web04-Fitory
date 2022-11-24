import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { SbdStatisticsService } from "./sbd_statistics.service";

@Controller("api/statistics")
@ApiTags("STATISTICS API")
export class SbdStatisticsController {
  constructor(private readonly statisticsService: SbdStatisticsService) {}

  @Get("everyDate")
  @ApiOperation({
    summary: "❌ 미구현) 전체 사용자의 SBD 통계를 반환",
  })
  getEveryExerciseDate() {
    return this.statisticsService.getEverySBDData();
  }
}
