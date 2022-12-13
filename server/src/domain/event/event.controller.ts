import { Controller, Req, Sse } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { NoAuth } from "@decorator/validate.decorator";
import { Request } from "express";
import { EventService } from "./event.service";

@Controller("api/event")
@ApiTags("EVENT API")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @NoAuth()
  @Sse("register")
  events(@Req() req: Request) {
    const userId = req.query.user_id as string;
    return this.eventService.subscribe(Number(userId));
  }
}
