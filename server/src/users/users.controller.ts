import { UsersService } from "./users.service";
import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller("api/users")
@ApiTags("USER API")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get("nameList")
  @ApiOperation({
    summary: "모든 사용자들의 이름을 반환",
  })
  async getEveryUserName() {
    return this.usersService.findEveryUserName();
  }
}
