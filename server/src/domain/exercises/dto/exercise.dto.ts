import { ArrayNotEmpty, IsArray, IsNotEmpty, IsNumber, Min, ValidateNested } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { SingleExercise } from "@exercise/dto/single-exercise.dto";

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
    description: "운동 배열",
    type: () => [SingleExercise],
  })
  @IsArray()
  @ArrayNotEmpty()
  @Type(() => SingleExercise)
  @ValidateNested({ each: true })
  exerciseList: SingleExercise[];
}
