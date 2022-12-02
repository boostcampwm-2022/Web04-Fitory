import { Follow } from "@follow/entities/follow.entity";
import { AlarmsService } from "@alarm/alarms.service";
import { Alarm } from "@alarm/entities/alram.entity";
import { UsersService } from "@user/users.service";
import { User } from "./../users/entities/user.entity";
import { Exercise } from "./entities/exercise.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExercisesController } from "./exercises.controller";
import { ExercisesService } from "./exercises.service";

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, User, Alarm, Follow])],
  controllers: [ExercisesController],
  providers: [ExercisesService, UsersService, AlarmsService],
})
export class ExercisesModule {}
