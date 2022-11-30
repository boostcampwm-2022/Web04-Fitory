import { Exception } from "@exception/exceptions";
import { User } from "./../users/entities/user.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { createImageURL } from "./multer_options";
import { Repository } from "typeorm";

@Injectable()
export default class UploadService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async uploadFiles(files: File[], userId: number) {
    try {
      const singleFile = files[0];
      const fileName = createImageURL(singleFile);
      const user = await this.userRepository
        .createQueryBuilder("user")
        .where("user.user_id = :userId", { userId })
        .getOne();
      user.profileImage = fileName;
      await this.userRepository.save(user);
      return fileName;
    } catch (error) {
      throw new Exception().fileSubmitError();
    }
  }
}
