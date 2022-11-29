import { Exception } from "@exception/exceptions";
import { existsSync, mkdirSync } from "fs";
import { diskStorage } from "multer";
import { extname } from "path";
import { v4 as uuid } from "uuid";

export const multerOptions = {
  fileFilter: (
    request: Request,
    file: { mimetype: string },
    callback: (arg0: null, arg1: boolean) => void,
  ) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
      callback(null, true);
    } else {
      throw new Exception().invalidFileType();
    }
  },

  storage: diskStorage({
    destination: (request, file, callback) => {
      const uploadPath: string = "public";
      if (!existsSync(uploadPath)) {
        mkdirSync(uploadPath);
      }
      callback(null, uploadPath);
    },
    filename: (request, file, callback) => {
      callback(null, `${uuid()}${extname(file.originalname)}`);
    },
  }),
};

export const createImageURL = (file: any): string => {
  const serverAddress: string = "http://localhost:8080";
  return `${serverAddress}/public/${file.filename}`;
};
