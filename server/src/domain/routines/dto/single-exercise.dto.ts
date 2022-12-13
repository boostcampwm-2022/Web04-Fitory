import { ApiProperty } from "@nestjs/swagger";
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { SingleSet } from "@routine/dto/single-set.dto";

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
