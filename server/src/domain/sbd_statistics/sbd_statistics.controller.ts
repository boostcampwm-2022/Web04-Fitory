import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { SbdStatisticsService } from "./sbd_statistics.service";

@Controller("api/statistics")
@ApiTags("STATISTICS API")
export class SbdStatisticsController {
  constructor(private readonly statisticsService: SbdStatisticsService) {}

  @Get("everyData")
  @ApiOperation({
    summary: "전체 사용자의 SBD 통계를 반환",
  })
  @ApiQuery({
    name: "gender",
    type: "number",
  })
  @ApiQuery({
    name: "weight",
    type: "number",
  })
  @ApiQuery({
    name: "range",
    type: "number",
  })
  getSBDStatisticsData(@Query() qurey: { gender: number; weight: number; range: number }) {
    return this.statisticsService.getSBDStatisticsData(
      Number(qurey.gender),
      Number(qurey.weight),
      Number(qurey.range),
    );
  }
}
