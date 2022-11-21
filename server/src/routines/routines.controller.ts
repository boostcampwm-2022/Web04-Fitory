import { RoutinesService } from "./routines.service";
import { Controller, Get } from "@nestjs/common";

@Controller("routines")
export class RoutinesController {
  constructor(private routinesService: RoutinesService) {}

  @Get()
  async findAll() {
    return this.routinesService.findAll();
  }
}
