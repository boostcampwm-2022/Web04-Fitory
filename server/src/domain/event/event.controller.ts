import { EventService } from "./event.service";
import { Controller, Get, Post, Req, Sse } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@Controller("api/event")
@ApiTags("EVENT API")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Sse("register")
  events(@Req() req: any) {
    const userId = req.query.user_id;
    return this.eventService.subscribe(userId);
  }
}
