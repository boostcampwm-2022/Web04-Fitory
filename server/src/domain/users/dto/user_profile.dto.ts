import { IsNumber, IsString, Length, Matches, Max, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class UserProfileDto {
  @ApiProperty({
    description: "유저의 고유 ID",
    type: Number,
  })
  @IsNumber()
  @Min(1)
  @Transform((prop) => Number(prop.obj.userId))
  userId: number;

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
  @Transform((prop) => Number(prop.obj.age))
  age: number;

  @ApiProperty({
    description: "유저 성별",
    type: Number,
  })
  @IsNumber()
  @Min(0)
  @Max(1)
  @Transform((prop) => Number(prop.obj.gender))
  gender: number;

  @ApiProperty({
    description: "유저 신장",
    type: Number,
    minimum: 0,
  })
  @IsNumber()
  @Min(1)
  @Max(300)
  @Transform((prop) => Number(prop.obj.height))
  height: number;

  @ApiProperty({
    description: "유저 체중",
    type: Number,
    minimum: 0,
  })
  @IsNumber()
  @Min(1)
  @Max(500)
  @Transform((prop) => Number(prop.obj.weight))
  weight: number;

  @ApiProperty({
    description: "유저 자기소개",
    type: String,
  })
  @IsString()
  @Length(0, 500)
  introduce: string;
}
