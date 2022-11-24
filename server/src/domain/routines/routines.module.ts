import { Routine } from "./entities/routine.entity";
import { Module } from "@nestjs/common";
import { RoutinesController } from "./routines.controller";
import { RoutinesService } from "./routines.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Routine])],
  controllers: [RoutinesController],
  providers: [RoutinesService],
})
export class RoutinesModule {}
