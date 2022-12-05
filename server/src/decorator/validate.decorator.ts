import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetUserId = createParamDecorator((_data, ctx: ExecutionContext): number => {
  const req = ctx.switchToHttp().getRequest();

  return req.user;
});
