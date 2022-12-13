import { Follow } from "@follow/entities/follow.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersService } from "../users/users.service";
import { User } from "../users/entities/user.entity";
import { Alarm } from "./entities/alram.entity";
import { AlarmsController } from "./alarms.controller";
import { AlarmsService } from "./alarms.service";

@Module({
  imports: [TypeOrmModule.forFeature([Alarm, User, Follow])],
  controllers: [AlarmsController],
  providers: [AlarmsService, UsersService],
})
export class AlarmsModule {}
