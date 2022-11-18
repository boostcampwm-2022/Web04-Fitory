import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "./config/typeorm.config";
import { UsersModule } from "./users/users.module";
import { RoutinesModule } from "./routines/routines.module";
import { ExercisesModule } from './exercises/exercises.module';
import { AlarmsModule } from './alarms/alarms.module';
import { SbdRecordsModule } from './sbd_records/sbd_records.module';
import { SbdStatisticsModule } from './sbd_statistics/sbd_statistics.module';
import { FollowsModule } from './follows/follows.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), UsersModule, RoutinesModule, ExercisesModule, AlarmsModule, SbdRecordsModule, SbdStatisticsModule, FollowsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
