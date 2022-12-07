import { Injectable } from "@nestjs/common";
import { EventEmitter } from "events";
import { fromEvent } from "rxjs";

@Injectable()
export class EventService {
  private readonly emitter: EventEmitter;

  constructor() {
    //! NestJS의 module, provider는 싱글톤
    this.emitter = new EventEmitter();
  }

  registerChannel(userId: number) {
    return fromEvent(this.emitter, `${userId}ch`);
  }
}
