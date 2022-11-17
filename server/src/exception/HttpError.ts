import { HttpException } from "@nestjs/common";

export default class HttpError extends HttpException {
  public statusCode = 0;

  public message = "";

  constructor(status: number, message: string) {
    super(message, status);
    this.statusCode = status;
    this.message = message;
  }
}
