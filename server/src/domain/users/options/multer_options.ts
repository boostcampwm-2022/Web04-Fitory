import { Exception } from "@exception/exceptions";
import { memoryStorage } from "multer";

export const multerOptions = {
  fileFilter: (
    request: Request,
    file: { mimetype: string },
    callback: (arg0: null, arg1: boolean) => void,
  ) => {
    if (file.mimetype.match(/\/(jpg|jpeg|png|heif)$/i)) {
      callback(null, true);
    } else {
      throw new Exception().invalidFileType();
    }
  },

  storage: memoryStorage(),
};
