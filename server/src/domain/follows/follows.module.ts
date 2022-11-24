import { Follow } from "./entities/follow.entity";
import { Module } from "@nestjs/common";
import { FollowsController } from "./follows.controller";
import { FollowsService } from "./follows.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forFeature([Follow])],
  controllers: [FollowsController],
  providers: [FollowsService],
})
export class FollowsModule {}
