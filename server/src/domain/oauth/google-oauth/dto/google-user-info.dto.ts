import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

export class GoogleUserInfoDto {
  @ApiProperty({
    description: "유저의 oauthId",
    type: BigInt,
  })
  @IsString()
  oauthId: string;

  @ApiProperty({
    description: "유저의 이름",
    type: String,
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: "유저의 성별",
    type: Number,
  })
  @IsNumber()
  gender: number;

  @ApiProperty({
    description: "유저의 나이",
    type: Number,
  })
  @IsNumber()
  age: number;

  @ApiProperty({
    description: "유저의 키",
    type: Number,
  })
  @IsNumber()
  height: number;

  @ApiProperty({
    description: "유저의 몸무게",
    type: Number,
  })
  @IsNumber()
  weight: number;
}
