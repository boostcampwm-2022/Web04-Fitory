import { Exception } from "@exception/exceptions";
import { HttpResponse } from "./../../converter/response.converter";
import { Body, Controller, Post, Query, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { multerOptions } from "./multer_options";
import UploadService from "./upload.service";
import { ApiQuery } from "@nestjs/swagger";
import { isValidUserId } from "@validation/validation";

@Controller("uploads")
export default class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseInterceptors(FilesInterceptor("images", null, multerOptions))
  @Post("/")
  async uploadFiles(@UploadedFiles() files: File[], @Body() userId: number) {
    console.log(userId, typeof userId);
    if (!isValidUserId(userId)) throw new Exception().invalidUserIdError();
    const filePath = await this.uploadService.uploadFiles(files, userId);
    return HttpResponse.success({
      filePath,
    });
  }
}
