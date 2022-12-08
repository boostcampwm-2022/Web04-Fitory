import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import TierGraph from "@components/TierGraph";
import WeightClassHistogram from "@components/WeightClassHistogram";
import * as s from "./style";

const StatisticsCarousel = () => {
  const [isHistogram, setIsHistogram] = useState<boolean>(true);
  const slideRef = useRef() as MutableRefObject<HTMLDivElement>;

  const movePrev = () => {
    if (!isHistogram) {
      setIsHistogram(true);
    }
  };

  const moveNext = () => {
    if (isHistogram) {
      setIsHistogram(false);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${isHistogram ? 0 : 5}0%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [isHistogram]);

  return (
    <s.Wrapper>
      <s.Container>
        <s.NavigationBar>
          <s.NavigationButton isHistogram={isHistogram} onClick={movePrev}>
            내 체급 통계
          </s.NavigationButton>
          <s.NavigationButton isHistogram={isHistogram} onClick={moveNext}>
            티어 변동
          </s.NavigationButton>
        </s.NavigationBar>
        <s.StaticsContainer ref={slideRef}>
          <s.ChartContainer>
            <div>
              <WeightClassHistogram />
            </div>
          </s.ChartContainer>
          <s.ChartContainer>
            <div>
              <TierGraph />
            </div>
          </s.ChartContainer>
        </s.StaticsContainer>
      </s.Container>
    </s.Wrapper>
  );
};

export default StatisticsCarousel;
