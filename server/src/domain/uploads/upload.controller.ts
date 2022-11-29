import { Exception } from "@exception/exceptions";
import { HttpResponse } from "./../../converter/response.converter";
import { Controller, Get, Post, UploadedFiles, UseGuards, UseInterceptors } from "@nestjs/common";
import { FilesInterceptor } from "@nestjs/platform-express";
import { multerOptions } from "./multer_options";
import UploadService from "./upload.service";

@Controller("uploads")
export default class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseInterceptors(FilesInterceptor("images", null, multerOptions))
  @Post("/")
  public uploadFiles(@UploadedFiles() files: File[]) {
    try {
      console.log(files);
      // this.uploadService.uploadFiles(files);
      return HttpResponse.success({
        message: "File Upload Success",
      });
    } catch (error) {
      throw new Exception().fileUploadError();
    }
  }
}
