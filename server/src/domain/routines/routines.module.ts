import { User } from "@user/entities/user.entity";
import { UsersService } from "@user/users.service";
import { Routine } from "./entities/routine.entity";
import { Module } from "@nestjs/common";
import { RoutinesController } from "./routines.controller";
import { RoutinesService } from "./routines.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Routine, User])],
  controllers: [RoutinesController],
  providers: [RoutinesService, UsersService],
})
export class RoutinesModule {}
