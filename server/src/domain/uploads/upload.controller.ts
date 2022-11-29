import { Exception } from "@exception/exceptions";
import { HttpResponse } from "./../../converter/response.converter";
import {
  Controller,
  Get,
  Post,
  Query,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { multerOptions } from "./multer_options";
import UploadService from "./upload.service";
import { ApiQuery } from "@nestjs/swagger";

@Controller("uploads")
export default class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseInterceptors(FilesInterceptor("images", null, multerOptions))
  @Post("/")
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async uploadFiles(@UploadedFiles() files: File[], @Query("userId") userId: number) {
    const file = await this.uploadService.uploadFiles(files, userId);
    console.log(file);
    return HttpResponse.success({
      // message: "File Upload Success",
      file: file,
    });
  }
}
