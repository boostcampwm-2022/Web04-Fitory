import { Body, Controller, Get, Post, Query, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { ApiOperation, ApiTags, ApiQuery } from "@nestjs/swagger";
import { Exception } from "@exception/exceptions";
import { FilesInterceptor } from "@nestjs/platform-express";
import { FollowsService } from "@follow/follows.service";
import { NoAuth } from "@decorator/validate.decorator";
import { UsersService } from "./users.service";
import { UserProfileDto } from "./dto/user_profile.dto";
import { multerOptions } from "./options/multer_options";

@Controller("api/users")
@ApiTags("USER API")
export class UsersController {
  constructor(private usersService: UsersService, private followService: FollowsService) {}

  @Get("get")
  @ApiOperation({
    summary: "해당 사용자의 모든 정보를 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getUserInfo(@Query("userId") userId: number) {
    return this.usersService.getUserInfo(userId);
  }

  @Get("search")
  @ApiOperation({
    summary: "검색한 내용을 토대로 검색 결과 반환",
  })
  getEveryUserName(@Query("userName") userName: string) {
    return this.usersService.searchUserByName(userName);
  }

  @Get("recommand/list")
  @ApiOperation({
    summary: "해당 사용자와 유사한 추천 사용자 리스트를 반환",
  })
  @ApiQuery({
    name: "userId",
    type: "number",
  })
  async getRecommandUserList(@Query("userId") userId: number) {
    return this.usersService.getRecommandUserList(userId);
  }

  @NoAuth()
  @Get("checkName")
  @ApiOperation({
    summary: "유저 이름 중복 검사",
  })
  @ApiQuery({
    name: "userName",
    type: "string",
  })
  checkUserName(@Query("userName") userName: string) {
    return this.usersService.checkUserName(userName);
  }

  @UseInterceptors(FilesInterceptor("images", null, multerOptions))
  @Post("update")
  @ApiOperation({
    summary: "해당 사용자의 프로필 정보를 업데이트",
  })
  async updateUserProfile(
    @UploadedFiles() file: Array<Express.Multer.File>,
    @Body() userProfileData: UserProfileDto,
  ) {
    const { userId } = userProfileData;

    const userIdExist = await this.usersService.isExistUser(userId);
    if (!userIdExist) throw new Exception().userNotFound();
    let filePath;

    if (file !== undefined && file.length > 0) {
      filePath = await this.usersService.uploadFiles(file[0], userId);
    }
    return this.usersService.updateUserProfile(userProfileData, filePath);
  }
}
