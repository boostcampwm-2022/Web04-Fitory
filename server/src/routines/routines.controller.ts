import { RoutinesService } from "./routines.service";
import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";

@Controller("api/routines")
@ApiTags("ROUTINE API")
export class RoutinesController {
  constructor(private routinesService: RoutinesService) {}

  @Get("list")
  @ApiOperation({
    summary: "해당 사용자의 모든 루틴을 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async findAll(@Query("userId") userId: number) {
    return this.routinesService.findEveryRoutine(userId);
  }
}
