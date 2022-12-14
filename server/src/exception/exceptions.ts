import { HttpResponse } from "@converter/response.converter";
import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  NotFoundException,
  UnauthorizedException,
} from "@nestjs/common";

export class Exception {
  invalidUserIdError(): HttpException {
    const response = HttpResponse.failed(HttpStatus.BAD_REQUEST, "Invalid User Id");
    return new BadRequestException(response);
  }

  invalidMonthError(): HttpException {
    const response = HttpResponse.failed(HttpStatus.BAD_REQUEST, "Invalid Month");
    return new BadRequestException(response);
  }

  invalidSubmit(): HttpException {
    const response = HttpResponse.failed(HttpStatus.FORBIDDEN, "Invalid Submit");
    return new ForbiddenException(response);
  }

  routineNotFound(): HttpException {
    const response = HttpResponse.failed(HttpStatus.NOT_FOUND, "Routine Not Found");
    return new NotFoundException(response);
  }

  userNotFound(): HttpException {
    const response = HttpResponse.failed(HttpStatus.NOT_FOUND, "User Not Found");
    return new NotFoundException(response);
  }

  Unauthorized(): HttpException {
    const response = HttpResponse.failed(
      HttpStatus.UNAUTHORIZED,
      "Unauthorized, Access Token Error",
    );
    return new UnauthorizedException(response);
  }

  invalidFileType(): HttpException {
    const response = HttpResponse.failed(HttpStatus.FORBIDDEN, "Invalid File Type");
    return new ForbiddenException(response);
  }

  fileSubmitError(): HttpException {
    const response = HttpResponse.failed(HttpStatus.FORBIDDEN, "File Sumit Error");
    return new ForbiddenException(response);
  }

  invalidDelete(): HttpException {
    const response = HttpResponse.failed(HttpStatus.FORBIDDEN, "Invalid Delete Error");
    return new ForbiddenException(response);
  }

  routineNameDuplicate(): HttpException {
    const response = HttpResponse.failed(HttpStatus.FORBIDDEN, "Routine Name Duplicate");
    return new ForbiddenException(response);
  }

  guardError(): HttpException {
    const response = HttpResponse.failed(
      HttpStatus.UNAUTHORIZED,
      "Auth Guard Error, Invalid User Id",
    );
    return new UnauthorizedException(response);
  }

  invalidStatistics(): HttpException {
    const response = HttpResponse.failed(
      HttpStatus.FORBIDDEN,
      "Invalid Gender or Weight for Statistics",
    );
    return new ForbiddenException(response);
  }
}
