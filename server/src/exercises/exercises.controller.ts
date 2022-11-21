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
}
