import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { Exception } from "src/exception/exceptions";
import { isValidUserId } from "src/validation/validation";
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
  getEverySBDRecord(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
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
  getBestSBDRecord(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    return this.recordsService.findBestSBDRecord(userId);
  }
}
