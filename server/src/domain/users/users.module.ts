import { Follow } from "./../follows/entities/follow.entity";
import { FollowsService } from "@follow/follows.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersService } from "./users.service";
import { UsersController } from "./users.controller";
import { User } from "./entities/user.entity";
import { SBD_record } from "@record/entities/sbd_record.entity";

@Module({
  imports: [TypeOrmModule.forFeature([User, SBD_record, Follow])],
  controllers: [UsersController],
  providers: [UsersService, FollowsService],
})
export class UsersModule {}
