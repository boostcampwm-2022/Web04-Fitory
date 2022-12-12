import { EventService } from "./event.service";
import { Controller, Get, Post, Req, Sse } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { NoAuth } from "src/decorator/validate.decorator";

@Controller("api/event")
@ApiTags("EVENT API")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @NoAuth()
  @Sse("register")
  events(@Req() req: any) {
    const userId = req.query.user_id;
    return this.eventService.subscribe(userId);
  }
}
