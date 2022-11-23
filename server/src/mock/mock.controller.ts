import { Controller, Get, Query } from "@nestjs/common";
import { ApiOperation, ApiQuery } from "@nestjs/swagger";
import { MockService } from "./mock.service";

@Controller("mock")
export class MockController {
  constructor(private readonly mockService: MockService) {}

  @Get()
  @ApiOperation({
    summary: "mock 데이터 생성",
  })
  @ApiQuery({
    name: "num",
    type: "number",
  })
  async mockDataGenerator(@Query("num") num: number) {
    const data = await this.mockService.getOpenData(num);

    await this.mockService.mockUsers(data);
    console.log("mock users");

    return "mock data complete";
  }
}
