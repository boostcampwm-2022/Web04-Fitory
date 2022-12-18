import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Exception } from "@exception/exceptions";
import { SingleSBDDataDto } from "./dto/single_sbd_data.dto";
import { SbdRecordsService } from "./sbd_records.service";

@Controller("api/record")
@ApiTags("RECORD API")
export class SbdRecordsController {
  constructor(private readonly recordsService: SbdRecordsService) {}

  @Get("every")
  @ApiOperation({
    summary: "해당 사용자의 모든 SBD 기록을 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getEverySBDRecord(@Query("userId") userId: number) {
    return this.recordsService.findEverySBDRecord(userId);
  }

  @Get("best")
  @ApiOperation({
    summary: "해당 사용자의 SBD 최고 기록을 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getBestSBDRecord(@Query("userId") userId: number) {
    return this.recordsService.findBestSBDRecord(userId);
  }

  @Get("recent")
  @ApiOperation({
    summary:
      "해당 사용자의 가장 최근 3대 챌린지 기록 시간을 초단위(new Date().getTime() / 1000) 형식으로 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getRecentRecordTime(@Query("userId") userId: number) {
    return this.recordsService.getRecentRecordTime(userId);
  }

  @Post("submit")
  @ApiOperation({
    summary: "해당 사용자의 SBD 측정 기록을 DB에 저장",
  })
  registerUser(@Body() sbdData: SingleSBDDataDto) {
    const sbdSum = sbdData.squat + sbdData.benchpress + sbdData.deadlift;
    if (sbdSum <= 1000) {
      return this.recordsService.submitSingleSBDRecord(sbdData);
    }
    throw new Exception().invalidSubmit();
  }
}
