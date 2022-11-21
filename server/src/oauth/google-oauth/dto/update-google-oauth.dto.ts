import { PartialType } from "@nestjs/mapped-types";
import { GoogleUserDto } from "./google-user.dto";

export class UpdateGoogleOauthDto extends PartialType(GoogleUserDto) {}
