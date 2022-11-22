import { ExercisesService } from "./exercises.service";
import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";

@Controller("api/exercise")
@ApiTags("EXERCISE API")
export class ExercisesController {
  constructor(private readonly exercisesService: ExercisesService) {}

  @Get("everyDate")
  @ApiOperation({
    summary: "해당 사용자가 운동한 모든 날짜들을 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  getEveryExerciseDate(@Query("userId") userId: number) {
    return this.exercisesService.findEveryExerciseDate(userId);
  }

  @Get("singleMonth")
  @ApiOperation({
    summary: "해당 사용자가 해당 월에 운동한 기록들을 반환",
  })
  @ApiQuery({
    name: "month",
    type: "number",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  getExerciseHistoryOfMonth(@Query("month") month: number, @Query("userId") userId: number) {
    return this.exercisesService.findExerciseHistoryOfMonth(month, userId);
  }

  @Get("profile")
  @ApiOperation({
    summary: "홈 페이지의 프로필에 필요한, 해당 사용자의 총 볼륨, 운동 일수를 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  getInfoForProfile(@Query("userId") userId: number) {
    return this.exercisesService.getProfileData(userId);
  }
}
