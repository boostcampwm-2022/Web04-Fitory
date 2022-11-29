import { User } from "./../users/entities/user.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import UploadController from "./upload.controller";
import UploadService from "./upload.service";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
