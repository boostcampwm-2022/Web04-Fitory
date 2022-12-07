import { Request } from "express";
import { EventService } from "./event.service";
import { Controller, Post, Req, Sse } from "@nestjs/common";

@Controller("event")
export class EventController {
  constructor(private readonly eventsService: EventService) {}

  @Sse("events")
  events(@Req() req: Request) {
    const userId = req.query.user_id;
    return this.eventsService.registerChannel(Number(userId));
  }
}
