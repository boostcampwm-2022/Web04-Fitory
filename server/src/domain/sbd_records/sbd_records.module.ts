import { UsersService } from "@user/users.service";
import { User } from "@user/entities/user.entity";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SBD_record } from "./entities/sbd_record.entity";
import { SbdRecordsController } from "./sbd_records.controller";
import { SbdRecordsService } from "./sbd_records.service";

@Module({
  imports: [TypeOrmModule.forFeature([SBD_record, User])],
  controllers: [SbdRecordsController],
  providers: [SbdRecordsService, UsersService],
})
export class SbdRecordsModule {}
