import { RoutinesService } from "./routines.service";
import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { isValidUserId } from "@validation/validation";
import { Exception } from "@exception/exceptions";

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
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    return this.routinesService.findEveryRoutine(userId);
  }

  @Get("single")
  @ApiOperation({
    summary: "❌ 미구현) 해당 루틴의 상세 정보를 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  @ApiQuery({
    name: "routineName",
    type: "string",
  })
  getEveryExerciseDate(@Query("userId") userId: number, @Query("routineName") routineName: string) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    // routineName에 대해 검증 추가 필요
    return this.routinesService.getSingleRoutine(userId, routineName);
  }
}
