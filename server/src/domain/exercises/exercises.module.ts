import { User } from "./../users/entities/user.entity";
import { Exercise } from "./entities/exercise.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExercisesController } from "./exercises.controller";
import { ExercisesService } from "./exercises.service";

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, User])],
  controllers: [ExercisesController],
  providers: [ExercisesService],
})
export class ExercisesModule {}
