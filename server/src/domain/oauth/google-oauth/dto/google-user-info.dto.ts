import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, Matches, Max, Min } from "class-validator";

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
  @Matches("^[a-z|A-Z|0-9|ㄱ-힣]{2,12}$")
  name: string;

  @ApiProperty({
    description: "유저의 성별",
    type: Number,
  })
  @IsNumber()
  @Min(0)
  @Max(1)
  gender: number;

  @ApiProperty({
    description: "유저의 나이",
    type: Number,
  })
  @IsNumber()
  @Min(1)
  @Max(100)
  age: number;

  @ApiProperty({
    description: "유저의 키",
    type: Number,
  })
  @IsNumber()
  @Min(1)
  @Max(300)
  height: number;

  @ApiProperty({
    description: "유저의 몸무게",
    type: Number,
  })
  @IsNumber()
  @Min(1)
  @Max(500)
  weight: number;
}
