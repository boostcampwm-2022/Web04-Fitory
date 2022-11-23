import { IsNumber, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UsersInfoDto {
  @IsString()
  profile_image: string;

  @ApiProperty({
    description: "유저의 고유 OAuth ID",
    type: BigInt,
  })
  @IsString()
  oauthId: string;

  @ApiProperty({
    description: "유저 이름",
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: "유저 나이",
    type: Number,
    minimum: 1,
    maximum: 100,
  })
  @IsNumber()
  age: number;

  @ApiProperty({
    description: "유저 성별",
    type: Boolean,
  })
  @IsNumber()
  gender: number;

  @ApiProperty({
    description: "유저 신장",
    type: Number,
    minimum: 0,
  })
  @IsNumber()
  height: number;

  @ApiProperty({
    description: "유저 체중",
    type: Number,
    minimum: 0,
  })
  @IsNumber()
  weight: number;

  @ApiProperty({
    description: "유저 자기소개",
    type: String,
  })
  @IsString()
  introduce: string;

  @ApiProperty({
    description: "유저 티어",
    type: Number,
    minimum: 0,
    maximum: 6,
    default: 0,
  })
  @IsNumber()
  tier: number;

  @ApiProperty({
    description: "유저의 팔로워 수",
    type: Number,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  follower_count: number;

  @ApiProperty({
    description: "유저의 팔로잉 수",
    type: Number,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  following_count: number;

  @ApiProperty({
    description: "유저의 총 볼륨(무게)",
    type: Number,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  volume_sum: number;
}
