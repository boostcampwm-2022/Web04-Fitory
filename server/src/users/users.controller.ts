import { UsersService } from "./users.service";
import { Controller, Get } from "@nestjs/common";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }
}
