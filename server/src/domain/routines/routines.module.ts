import { User } from "@user/entities/user.entity";
import { UsersService } from "@user/users.service";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Routine } from "./entities/routine.entity";
import { RoutinesController } from "./routines.controller";
import { RoutinesService } from "./routines.service";

@Module({
  imports: [TypeOrmModule.forFeature([Routine, User])],
  controllers: [RoutinesController],
  providers: [RoutinesService, UsersService],
})
export class RoutinesModule {}
