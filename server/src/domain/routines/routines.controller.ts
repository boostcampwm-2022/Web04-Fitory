import { UsersService } from "@user/users.service";
import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery, ApiTags } from "@nestjs/swagger";
import { RoutinesService } from "./routines.service";
import { RoutineDto } from "./dto/single-routine.dto";

@Controller("api/routines")
@ApiTags("ROUTINE API")
export class RoutinesController {
  constructor(
    private readonly routinesService: RoutinesService,
    private readonly usersService: UsersService,
  ) {}

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

  @Get("single")
  @ApiOperation({
    summary: "해당 루틴의 상세 정보를 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  @ApiQuery({
    name: "routineName",
    type: "string",
  })
  async getSingleRoutineDetail(
    @Query("userId") userId: number,
    @Query("routineName") routineName: string,
  ) {
    return this.routinesService.getSingleRoutineDetail(userId, routineName);
  }

  @Post("save")
  @ApiOperation({
    summary: "루틴 저장",
  })
  async saveRoutine(@Body() routineData: RoutineDto) {
    return this.routinesService.saveRoutine(routineData);
  }

  @Post("update")
  @ApiOperation({
    summary: "루틴 수정",
  })
  async updateRoutine(@Body() routineData: RoutineDto) {
    return this.routinesService.updateRoutine(routineData);
  }

  @Get("delete")
  @ApiOperation({
    summary: "해당 루틴 삭제",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  @ApiQuery({
    name: "routineName",
    type: "string",
  })
  async deleteRoutine(@Query("userId") userId: number, @Query("routineName") routineName: string) {
    return this.routinesService.deleteRoutine(userId, routineName);
  }
}
