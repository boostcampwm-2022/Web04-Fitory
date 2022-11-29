import { HttpResponse } from "@converter/response.converter";
import { BadRequestException, HttpException, HttpStatus, NotFoundException } from "@nestjs/common";

export class Exception {
  invalidUserIdError(): HttpException {
    const response = HttpResponse.failed(HttpStatus.BAD_REQUEST, "Invalid User Id");
    return new BadRequestException(response);
  }

  invalidMonthError(): HttpException {
    const response = HttpResponse.failed(HttpStatus.BAD_REQUEST, "Invalid Month");
    return new BadRequestException(response);
  }

  routineNotFound(): HttpException {
    const response = HttpResponse.failed(HttpStatus.NOT_FOUND, "Routine Not Found");
    return new NotFoundException(response);
  }

  userNotFound(): HttpException {
    const response = HttpResponse.failed(HttpStatus.NOT_FOUND, "User Not Found");
    return new NotFoundException(response);
  }
}
