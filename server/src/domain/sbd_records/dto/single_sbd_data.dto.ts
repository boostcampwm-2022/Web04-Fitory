import { IsNumber, IsString, Length, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class SingleSBDDataDto {
  @ApiProperty({
    description: "유저의 고유 ID",
    type: Number,
  })
  @IsNumber()
  @Min(1)
  userId: number;

  @ApiProperty({
    description: "스쿼트 중량",
    type: Number,
  })
  @IsNumber()
  @Min(1)
  squat: number;

  @ApiProperty({
    description: "벤치 프레스 중량",
    type: Number,
  })
  @IsNumber()
  @Min(1)
  benchpress: number;

  @ApiProperty({
    description: "데드 리프트 중량",
    type: Number,
  })
  @IsNumber()
  @Min(1)
  deadlift: number;

  @ApiProperty({
    description: "기록 제출 날짜",
    type: String,
  })
  @IsString()
  @Length(6, 6)
  date: string;
}
