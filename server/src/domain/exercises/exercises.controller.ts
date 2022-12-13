import { FollowsService } from "@follow/follows.service";
import { Exception } from "@exception/exceptions";
import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiBody, ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { isValidMonth, isValidUserId } from "@validation/validation";
import { UsersService } from "@user/users.service";
import { AlarmsService } from "@alarm/alarms.service";
import { ExerciseDataDto } from "./dto/exercise.dto";
import { ExercisesService } from "./exercises.service";
import { EventService } from "../event/event.service";

@Controller("api/exercise")
@ApiTags("EXERCISE API")
export class ExercisesController {
  constructor(
    private readonly exercisesService: ExercisesService,
    private readonly usersService: UsersService,
    private readonly alarmsService: AlarmsService,
    private readonly followService: FollowsService,
    private readonly eventService: EventService,
  ) {}

  @Get("everyDate")
  @ApiOperation({
    summary: "해당 사용자가 운동한 모든 날짜들을 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getEveryExerciseDate(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
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
  async getExerciseHistoryOfMonth(@Query("month") month: number, @Query("userId") userId: number) {
    if (!isValidMonth(month)) throw new Exception().invalidMonthError();
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
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
  async getInfoForProfile(@Query("userId") userId: number) {
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    return this.exercisesService.getProfileData(userId);
  }

  @Post("submit")
  @ApiOperation({
    summary: "해당 사용자가 제출한 운동 기록을 DB에 저장",
  })
  @ApiBody({ type: () => ExerciseDataDto })
  async submitExercise(@Body() exerciseData: ExerciseDataDto) {
    await this.alarmsService.sendExerciseAlarm(exerciseData.userId);
    const followerUserIdList = await this.followService.getFollowerUserIdList(exerciseData.userId);
    this.eventService.emit(followerUserIdList);
    return this.exercisesService.submitExercise(exerciseData);
  }
}
