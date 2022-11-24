import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery } from "@nestjs/swagger";
import { MockService } from "./mock.service";

@Controller("mock")
export class MockController {
  constructor(private readonly mockService: MockService) {}

  @Get()
  @ApiOperation({
    summary: "mock 데이터 생성 ❗️배포시 반드시 삭제, Generator 실행시 DB 초기화 후 실행 추천",
  })
  @ApiQuery({
    name: "num",
    type: "number",
  })
  async mockDataGenerator(@Query("num") num: number) {
    // 실행 순서 중요함
    const userNums = Array.from({ length: num }, (_, i) => i + 1); // 유저 수
    const followNums = Array.from(Array(num * 2).keys()); // 무작위 num*2 만큼의 팔로우<->팔로잉 관계 생성
    await Promise.all(
      followNums.map(() => {
        return this.mockService.mockFollow(userNums);
      }),
    );

    await this.mockService.mockUsers(userNums);

    const recordNums = Array.from(Array(12).keys()); // 각 유저가 1년 이내의 무작위 날짜로 12번만큼 챌린지 기록
    await Promise.all(
      recordNums.map(() => {
        return this.mockService.mockRecord();
      }),
    );

    await this.mockService.mockStatistics();

    await this.mockService.mockRoutine();

    const exerciseNum = Array.from(Array(60).keys()); // 각 유저가 최근 3개월 이내의 무작위 날짜로 3세트 짜리 운동을 60개 기록
    await Promise.all(
      exerciseNum.map(() => {
        return this.mockService.mockExercise();
      }),
    );

    const alarmNum = Array.from(Array(5).keys()); // 각 유저가 5개의 알림을 받음
    await Promise.all(
      alarmNum.map(() => {
        return this.mockService.mockAlarm();
      }),
    );

    return "mock data complete";
  }
}
