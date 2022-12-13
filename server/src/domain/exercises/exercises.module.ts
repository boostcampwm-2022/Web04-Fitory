import { FollowsService } from "@follow/follows.service";
import { Follow } from "@follow/entities/follow.entity";
import { AlarmsService } from "@alarm/alarms.service";
import { Alarm } from "@alarm/entities/alram.entity";
import { UsersService } from "@user/users.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../users/entities/user.entity";
import { Exercise } from "./entities/exercise.entity";
import { EventModule } from "../event/event.module";
import { ExercisesController } from "./exercises.controller";
import { ExercisesService } from "./exercises.service";

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, User, Alarm, Follow]), EventModule],
  controllers: [ExercisesController],
  providers: [ExercisesService, UsersService, AlarmsService, FollowsService],
})
export class ExercisesModule {}
