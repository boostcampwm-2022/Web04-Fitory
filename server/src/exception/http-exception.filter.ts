import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  InternalServerErrorException,
} from "@nestjs/common";
import { Request, Response } from "express";

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    let newException;

    if (!(exception instanceof HttpException)) {
      newException = new InternalServerErrorException();
    }

    const response = (newException as HttpException).getResponse();

    const log = {
      timestamp: new Date().toLocaleDateString(),
      url: req.url,
      response,
    };

    // eslint-disable-next-line no-console
    console.log(log);

    res.status((newException as HttpException).getStatus()).json(response);
  }
}
