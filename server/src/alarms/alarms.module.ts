import { Alarm } from "./entities/alram.entity";
import { Module } from "@nestjs/common";
import { AlarmsController } from "./alarms.controller";
import { AlarmsService } from "./alarms.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Alarm])],
  controllers: [AlarmsController],
  providers: [AlarmsService],
})
export class AlarmsModule {}