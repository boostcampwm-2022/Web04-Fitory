import {
  ArrayNotEmpty,
  IsArray,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  Matches,
  Max,
  Min,
  ValidateNested,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { type } from "os";

export class ExerciseDataDto {
  @ApiProperty({
    description: "유저의 고유 ID",
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  userId: number;

  @ApiProperty({
    description: "기록 제출 날짜",
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @Matches("^([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$")
  date: string;

  @ApiProperty({
    description: "운동 배열",
    type: () => [SingleExercise],
  })
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => SingleExercise)
  @ValidateNested({ each: true })
  exerciseList: SingleExercise[];
}

export class SingleExercise {
  @ApiProperty({
    description: "운동 이름",
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  exerciseName: string;

  @ApiProperty({
    description: "운동 배열",
    type: () => [SingleSet],
  })
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => SingleSet)
  @ValidateNested({ each: true })
  setList: SingleSet[];
}

export class SingleSet {
  @ApiProperty({
    description: "중량",
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1000)
  kg: number;

  @ApiProperty({
    description: "반복 횟수",
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(100)
  count: number;

  @ApiProperty({
    description: "수행 여부",
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(1)
  check: number;
}
