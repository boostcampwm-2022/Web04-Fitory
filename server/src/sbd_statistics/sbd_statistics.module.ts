import { SBD_statistics } from "./entities/sbd_statistics.entity";
import { Module } from "@nestjs/common";
import { SbdStatisticsController } from "./sbd_statistics.controller";
import { SbdStatisticsService } from "./sbd_statistics.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([SBD_statistics])],
  controllers: [SbdStatisticsController],
  providers: [SbdStatisticsService],
})
export class SbdStatisticsModule {}
