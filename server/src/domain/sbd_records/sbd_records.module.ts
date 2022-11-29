import { User } from "./../users/entities/user.entity";
import { SBD_record } from "./entities/sbd_record.entity";
import { Module } from "@nestjs/common";
import { SbdRecordsController } from "./sbd_records.controller";
import { SbdRecordsService } from "./sbd_records.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([SBD_record, User])],
  controllers: [SbdRecordsController],
  providers: [SbdRecordsService],
})
export class SbdRecordsModule {}
