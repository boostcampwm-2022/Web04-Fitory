import { IsNumber, IsString, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RoutineDto {
  @ApiProperty({
    description: "유저의 고유 ID",
    type: Number,
  })
  @IsNumber()
  @Min(1)
  userId: number;

  @ApiProperty({
    description: "루틴 이름",
    type: String,
  })
  @IsString()
  routineName: string;

  @ApiProperty({
    description: "운동 이름",
    type: String,
  })
  @IsString()
  exerciseName: string;

  @ApiProperty({
    description: "운동 기록 문자열 ex) 90/7|90/7|70/5",
    type: String,
  })
  @IsString()
  exerciseString: string;
}
