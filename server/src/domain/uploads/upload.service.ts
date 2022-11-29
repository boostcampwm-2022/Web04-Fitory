import { Injectable } from "@nestjs/common";
import { createImageURL } from "./multer_options";

@Injectable()
export default class UploadService {
  public uploadFiles(files: File[]): string[] {
    const generatedFiles: string[] = [];
    files.map((file) => {
      generatedFiles.push(createImageURL(file));
    });
    return generatedFiles;
  }
}
