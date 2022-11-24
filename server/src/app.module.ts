import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlarmsModule } from "./domain/alarms/alarms.module";
import { typeormConfig } from "./config/typeorm.config";
import { HttpExceptionFilter } from "./exception/http-exception.filter";
import { ExercisesModule } from "./domain/exercises/exercises.module";
import { FollowsModule } from "./domain/follows/follows.module";
import { GoogleOauthModule } from "./domain/oauth/google-oauth/google-oauth.module";
import { RoutinesModule } from "./domain/routines/routines.module";
import { SbdRecordsModule } from "./domain/sbd_records/sbd_records.module";
import { SbdStatisticsModule } from "./domain/sbd_statistics/sbd_statistics.module";
import { UsersModule } from "./domain/users/users.module";

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
