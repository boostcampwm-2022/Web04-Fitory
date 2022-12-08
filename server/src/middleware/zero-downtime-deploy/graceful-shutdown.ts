import { Injectable, OnApplicationShutdown } from "@nestjs/common";
import { GlobalService } from "./is-disable-keep-alive.global";

@Injectable()
export class GracefulShutdown implements OnApplicationShutdown {
  onApplicationShutdown(signal: string) {
    if (signal === "SIGINT") {
      GlobalService.isDisableKeepAlive = true;

      console.log("server closed");
    }
  }
}
