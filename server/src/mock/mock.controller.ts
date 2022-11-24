import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery } from "@nestjs/swagger";
import { MockService } from "./mock.service";

@Controller("mock")
export class MockController {
  constructor(private readonly mockService: MockService) {}

  @Get()
  @ApiOperation({
    summary: "mock 데이터 생성 ❗️배포시 반드시 삭제",
  })
  @ApiQuery({
    name: "num",
    type: "number",
  })
  async mockDataGenerator(@Query("num") num: number) {
    const userNums = Array.from({ length: num }, (_, i) => i + 1); // 유저 수
    await this.mockService.mockUsers(userNums);
    console.log("mock users");

    const recordNums = Array.from(Array(12).keys()); // 각 유저가 1년 이내의 무작위 날짜로 12번만큼 챌린지 기록
    await Promise.all(
      recordNums.map(() => {
        return this.mockService.mockRecord();
      }),
    );
    console.log("mock record");

    // await this.mockService.mockStatistics();
    // console.log("mock statistics");

    await this.mockService.mockRoutine();
    console.log("mock routine");

    const exerciseNum = Array.from(Array(200).keys()); // 각 유저가 1년 이내의 무작위 날짜로 3세트 짜리 운동을 200개 기록
    await Promise.all(
      exerciseNum.map(() => {
        return this.mockService.mockExercise();
      }),
    );
    console.log("mock exercise");

    const alarmNum = Array.from(Array(5).keys()); // 각 유저가 5개의 알림을 받음
    await Promise.all(
      alarmNum.map(() => {
        return this.mockService.mockAlarm();
      }),
    );
    console.log("mock alarm");

    return "mock data complete";
  }
}
