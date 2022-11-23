import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { isBigInt } from "@nestjs/swagger/dist/plugin/utils/ast-utils";

export class GoogleUserDto {
  @ApiProperty({
    description: "유저의 고유 OAuth ID",
    type: isBigInt,
  })
  @IsString()
  oauthId: string;

  @ApiProperty({
    description: "유저의 이름",
    type: String,
  })
  @IsString()
  name: string;
}
