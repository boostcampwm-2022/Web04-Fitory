import { SetMetadata } from "@nestjs/common";
import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { User } from "@user/entities/user.entity";

export const NoAuth = () => SetMetadata("no-auth", true);

export const GetUserId = createParamDecorator((_data, ctx: ExecutionContext): User => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});
