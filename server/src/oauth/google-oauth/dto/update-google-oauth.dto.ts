import { PartialType } from '@nestjs/mapped-types';
import { CreateGoogleOauthDto } from './create-google-oauth.dto';

export class UpdateGoogleOauthDto extends PartialType(CreateGoogleOauthDto) {}
