import { EventModule } from "./../event/event.module";
import { AlarmsService } from "@alarm/alarms.service";
import { Alarm } from "@alarm/entities/alram.entity";
import { UsersService } from "@user/users.service";
import { User } from "./../users/entities/user.entity";
import { Follow } from "./entities/follow.entity";
import { Module } from "@nestjs/common";
import { FollowsController } from "./follows.controller";
import { FollowsService } from "./follows.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Follow, User, Alarm]), EventModule],
  controllers: [FollowsController],
  providers: [FollowsService, UsersService, AlarmsService],
})
export class FollowsModule {}
