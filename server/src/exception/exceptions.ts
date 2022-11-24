import { HttpResponse } from "@converter/response.converter";
import { BadRequestException, HttpException, HttpStatus } from "@nestjs/common";

export class Exception {
  invalidUserIdError(): HttpException {
    const response = HttpResponse.failed(HttpStatus.BAD_REQUEST, "Invalid User Id");
    return new BadRequestException(response);
  }

  invalidMonthError(): HttpException {
    const response = HttpResponse.failed(HttpStatus.BAD_REQUEST, "Invalid Month");
    return new BadRequestException(response);
  }
}
