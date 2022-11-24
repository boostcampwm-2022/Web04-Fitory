import { Test, TestingModule } from '@nestjs/testing';
import { GoogleOauthService } from './google-oauth.service';

describe('GoogleOauthService', () => {
  let service: GoogleOauthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GoogleOauthService],
    }).compile();

    service = module.get<GoogleOauthService>(GoogleOauthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
