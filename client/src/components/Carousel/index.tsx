import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import TierGraph from "@components/TierGraph";
import * as s from "./style";

const Carousel = () => {
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
            통계
          </s.NavigationButton>
          <s.NavigationButton isHistogram={isHistogram} onClick={moveNext}>
            티어 변동
          </s.NavigationButton>
        </s.NavigationBar>
        <s.StaticsContainer ref={slideRef}>
          <s.ChartContainer>여기에 히스토그램을 넣어주세요.</s.ChartContainer>
          <s.ChartContainer>
            <TierGraph />
          </s.ChartContainer>
        </s.StaticsContainer>
      </s.Container>
    </s.Wrapper>
  );
};

export default Carousel;
