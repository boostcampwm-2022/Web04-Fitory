import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { User } from "./entities/user.entity";
import { SBD_record } from "../sbd_records/entities/sbd_record.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, SBD_record])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
