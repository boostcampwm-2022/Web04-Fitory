import React from "react";
import MainContainer from "@components/MainContainer";
import GoogleOAuthButton from "@components/GoogleOAuthButton";
import mainLogoSrc from "@public/images/img_logo_main.webp";
import screenshotHomeSrc from "@public/appImages/screenshot-home.webp";
import screenshotStatisticsSrc from "@public/appImages/screenshot-statistics.webp";
import screenshotProfileSrc from "@public/appImages/screenshot-profile.webp";
import CardsScroller from "@components/design/CardsScroller";
import * as s from "./style";

const screenshotList = [
  { imageSrc: screenshotHomeSrc, description: "내 운동 기록을 한눈에" },
  { imageSrc: screenshotStatisticsSrc, description: "내 체급의 통계 확인" },
  { imageSrc: screenshotProfileSrc, description: "운동을 친구와 함께" },
];

const LoginPage = () => {
  return (
    <MainContainer isRoot={false} style={{ paddingTop: 0 }}>
      <s.Background>
        <s.Logo src={mainLogoSrc} alt="Fitory 메인 로고" />
        <CardsScroller style={{ padding: "30px", marginBottom: "20px" }}>
          {screenshotList.map(({ imageSrc, description }) => (
            <s.ExampleWrapper>
              <s.ExampleDescription>{description}</s.ExampleDescription>
              <s.ExampleImage src={imageSrc} alt="홈 페이지 스크린샷" />
            </s.ExampleWrapper>
          ))}
        </CardsScroller>
        <GoogleOAuthButton />
      </s.Background>
    </MainContainer>
  );
};

export default LoginPage;
