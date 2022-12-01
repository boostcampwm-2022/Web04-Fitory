import { UsersService } from "@user/users.service";
import { User } from "./../users/entities/user.entity";
import { Follow } from "./entities/follow.entity";
import { Module } from "@nestjs/common";
import { FollowsController } from "./follows.controller";
import { FollowsService } from "./follows.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Follow, User])],
  controllers: [FollowsController],
  providers: [FollowsService, UsersService],
})
export class FollowsModule {}
