import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Reflector } from "@nestjs/core";
import { Exception } from "@exception/exceptions";

@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {
  // constructor(private readonly reflector: Reflector) {
  //   super();
  // }
  // async canActivate(context: ExecutionContext): Promise<boolean> {
  //   const noAuth = this.reflector.get<boolean>("no-auth", context.getHandler());
  //   if (noAuth) {
  //     return true;
  //   }
  //   // call AuthGuard in order to ensure user is injected in request
  //   // https://github.com/nestjs/passport/blob/master/lib/auth.guard.ts#L45
  //   const guardResult = (await super.canActivate(context)) as boolean;
  //   if (!guardResult) {
  //     return false;
  //   }
  //   const req = context.switchToHttp().getRequest();
  //   if (Number(req.headers.user_id) !== req.user) {
  //     throw new Exception().guardError();
  //   }
  //   return true;
  // }
}
