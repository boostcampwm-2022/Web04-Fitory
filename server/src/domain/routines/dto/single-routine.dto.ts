import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
  ValidateNested,
} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

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
    description: "루틴 고유 ID",
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  routineId: number;

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
}
