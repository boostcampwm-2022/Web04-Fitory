import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class AccessTokenDto {
  @ApiProperty({
    description: "유저의 Access_token",
    type: String,
  })
  @IsString()
  accessToken: string;
}
