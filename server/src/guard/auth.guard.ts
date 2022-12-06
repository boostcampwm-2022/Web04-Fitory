import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { Exception } from "@exception/exceptions";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";

@Injectable()
export class UserIdGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const noAuth = this.reflector.get<boolean>("no-auth", context.getHandler());

    if (noAuth) return true;

    const req = context.switchToHttp().getRequest();

    if (Number(req.headers.user_id) !== req.user) {
      throw new Exception().guardError();
    }

    return true;
  }
}
