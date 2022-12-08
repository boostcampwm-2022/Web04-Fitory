import { IsNumber, IsString, Length, Matches, Max, Min } from "class-validator";
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
  @Matches("^[a-z|A-Z|0-9|ㄱ-힣]{2,12}$")
  name: string;

  @ApiProperty({
    description: "유저 나이",
    type: Number,
    minimum: 1,
    maximum: 100,
  })
  @IsNumber()
  @Min(1)
  @Max(100)
  age: number;

  @ApiProperty({
    description: "유저 성별",
    type: Number,
  })
  @IsNumber()
  @Min(0)
  @Max(1)
  gender: number;

  @ApiProperty({
    description: "유저 신장",
    type: Number,
    minimum: 0,
  })
  @IsNumber()
  @Min(1)
  @Max(300)
  height: number;

  @ApiProperty({
    description: "유저 체중",
    type: Number,
    minimum: 0,
  })
  @IsNumber()
  @Min(1)
  @Max(500)
  weight: number;

  @ApiProperty({
    description: "유저 자기소개",
    type: String,
  })
  @IsString()
  @Length(0, 500)
  introduce: string;

  @ApiProperty({
    description: "유저 티어",
    type: Number,
    minimum: 0,
    maximum: 6,
    default: 0,
  })
  @IsNumber()
  @Min(0)
  @Max(6)
  tier: number;

  @ApiProperty({
    description: "유저의 총 볼륨(무게)",
    type: Number,
    minimum: 0,
    default: 0,
  })
  @IsNumber()
  @Min(0)
  volume_sum: number;
}
