import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { Exception } from "@exception/exceptions";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  constructor(private readonly reflector: Reflector) {
    super();
  }

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
