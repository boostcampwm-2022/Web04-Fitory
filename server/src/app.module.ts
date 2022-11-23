import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlarmsModule } from "./alarms/alarms.module";
import { typeormConfig } from "./config/typeorm.config";
import { HttpExceptionFilter } from "./exception/http-exception.filter";
import { ExercisesModule } from "./exercises/exercises.module";
import { FollowsModule } from "./follows/follows.module";
import { GoogleOauthModule } from "./oauth/google-oauth/google-oauth.module";
import { RoutinesModule } from "./routines/routines.module";
import { SbdRecordsModule } from "./sbd_records/sbd_records.module";
import { SbdStatisticsModule } from "./sbd_statistics/sbd_statistics.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    GoogleOauthModule,
    UsersModule,
    RoutinesModule,
    ExercisesModule,
    AlarmsModule,
    SbdRecordsModule,
    SbdStatisticsModule,
    FollowsModule,
    TypeOrmModule.forRoot(typeormConfig),
    PassportModule.register({ session: true }),
  ],

  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AppModule {}
