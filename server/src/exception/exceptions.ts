import { BadRequestException, HttpException, HttpStatus } from "@nestjs/common";

export class Exception {
  invalidUserIdError(): HttpException {
    return new BadRequestException({
      ok: false,
      statusCode: HttpStatus.BAD_REQUEST,
      response: "Invalid User Id",
    });
  }

  invalidMonthError(): HttpException {
    return new BadRequestException({
      ok: false,
      statusCode: HttpStatus.BAD_REQUEST,
      response: "Invalid Month",
    });
  }
}
