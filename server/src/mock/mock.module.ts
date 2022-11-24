import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MockService } from "./mock.service";
import { MockController } from "./mock.controller";
import { User } from "../users/entities/user.entity";
import { SBD_record } from "../sbd_records/entities/sbd_record.entity";
import { SBD_statistics } from "../sbd_statistics/entities/sbd_statistics.entity";
import { Routine } from "../routines/entities/routine.entity";
import { Follow } from "../follows/entities/follow.entity";
import { Exercise } from "../exercises/entities/exercise.entity";
import { Alarm } from "../alarms/entities/alram.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, SBD_record, SBD_statistics, Routine, Follow, Exercise, Alarm]),
  ],
  controllers: [MockController],
  providers: [MockService],
})
export class MockModule {}
