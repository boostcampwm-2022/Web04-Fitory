import { Module } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlarmsModule } from "@alarm/alarms.module";
import { typeormConfig } from "./config/typeorm.config";
import { HttpExceptionFilter } from "@exception/http-exception.filter";
import { ExercisesModule } from "@exercise/exercises.module";
import { FollowsModule } from "@follow/follows.module";
import { GoogleOauthModule } from "@oauth/google-oauth/google-oauth.module";
import { RoutinesModule } from "@routine/routines.module";
import { SbdRecordsModule } from "@record/sbd_records.module";
import { SbdStatisticsModule } from "@statistics/sbd_statistics.module";
import { UsersModule } from "@user/users.module";
import { MockModule } from "@mock/mock.module";
import { UploadModule } from "./domain/uploads/upload.module";

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
    MockModule,
    UploadModule,
    TypeOrmModule.forRoot(typeormConfig),
    PassportModule.register({ session: true }),
  ],

  providers: [{ provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AppModule {}
