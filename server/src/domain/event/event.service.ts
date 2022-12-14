import { Injectable } from "@nestjs/common";
import EventEmitter from "events";
import { fromEvent } from "rxjs";

@Injectable()
export class EventService {
  readonly emitter: EventEmitter;

  constructor() {
    this.emitter = new EventEmitter();
  }

  subscribe(userId: number) {
    return fromEvent(this.emitter, `${userId}ch`);
  }

  emit(userIdList: Array<number>) {
    userIdList.map((userId) => {
      const isUserConnect = this.emitter.listeners(`${userId}ch`).length;
      if (isUserConnect) {
        this.emitter.emit(`${userId}ch`, { data: "true" });
      }
      return null;
    });
  }
}
