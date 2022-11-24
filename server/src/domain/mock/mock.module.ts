import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@user/entities/user.entity";
import { SBD_record } from "@record/entities/sbd_record.entity";
import { SBD_statistics } from "@statistics/entities/sbd_statistics.entity";
import { Routine } from "@routine/entities/routine.entity";
import { Follow } from "@follow/entities/follow.entity";
import { Exercise } from "@exercise/entities/exercise.entity";
import { Alarm } from "@alarm/entities/alram.entity";
import { MockController } from "./mock.controller";
import { MockService } from "./mock.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, SBD_record, SBD_statistics, Routine, Follow, Exercise, Alarm]),
  ],
  controllers: [MockController],
  providers: [MockService],
})
export class MockModule {}
