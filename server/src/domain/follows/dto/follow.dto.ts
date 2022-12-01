import { IsNotEmpty, IsNumber, Min } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FollowUserIdDto {
  @ApiProperty({
    description: "팔로우를 하는 사용자의 고유 ID",
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  myUserId: number;

  @ApiProperty({
    description: "팔로우 요청을 받는 사용자의 고유 ID",
    type: Number,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  otherUserId: number;
}
