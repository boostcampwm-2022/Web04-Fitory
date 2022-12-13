import { AlarmsService } from "@alarm/alarms.service";
import { Alarm } from "@alarm/entities/alram.entity";
import { UsersService } from "@user/users.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EventModule } from "../event/event.module";
import { User } from "../users/entities/user.entity";
import { Follow } from "./entities/follow.entity";
import { FollowsController } from "./follows.controller";
import { FollowsService } from "./follows.service";

@Module({
  imports: [TypeOrmModule.forFeature([Follow, User, Alarm]), EventModule],
  controllers: [FollowsController],
  providers: [FollowsService, UsersService, AlarmsService],
})
export class FollowsModule {}
