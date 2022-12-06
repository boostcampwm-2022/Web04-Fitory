import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { APP_FILTER } from "@nestjs/core";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AlarmsModule } from "@alarm/alarms.module";
import { HttpExceptionFilter } from "@exception/http-exception.filter";
import { ExercisesModule } from "@exercise/exercises.module";
import { FollowsModule } from "@follow/follows.module";
import { GoogleOauthModule } from "@oauth/google-oauth/google-oauth.module";
import { RoutinesModule } from "@routine/routines.module";
import { SbdRecordsModule } from "@record/sbd_records.module";
import { SbdStatisticsModule } from "@statistics/sbd_statistics.module";
import { UsersModule } from "@user/users.module";
import { MockModule } from "@mock/mock.module";
import { JwtService } from "@nestjs/jwt";
import { typeormConfig } from "./config/typeorm.config";
import { ValidUserMiddleware } from "./middleware/valid-user/valid-user.middleware";

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
    TypeOrmModule.forRoot(typeormConfig),
    PassportModule,
  ],

  providers: [JwtService, { provide: APP_FILTER, useClass: HttpExceptionFilter }],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): any {
    consumer.apply(ValidUserMiddleware).exclude("api/oauth").forRoutes("api");
  }
}
