import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SBD_statistics } from "./entities/sbd_statistics.entity";
import { SbdStatisticsController } from "./sbd_statistics.controller";
import { SbdStatisticsService } from "./sbd_statistics.service";

@Module({
  imports: [TypeOrmModule.forFeature([SBD_statistics])],
  controllers: [SbdStatisticsController],
  providers: [SbdStatisticsService],
})
export class SbdStatisticsModule {}
