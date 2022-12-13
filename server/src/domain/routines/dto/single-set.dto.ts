import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, Max, Min } from "class-validator";

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
