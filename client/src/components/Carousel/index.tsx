import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import TierGraph from "@components/TierGraph";
import styled from "styled-components";

const CHART_NUM = 1;

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef() as MutableRefObject<HTMLDivElement>;

  const movePrev = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const moveNext = () => {
    if (currentSlide >= CHART_NUM) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Container>
      <ChartContainer>
        <TierGraph />
        <TierGraph />
      </ChartContainer>
      <div>
        <button onClick={movePrev}>이전</button>
        <button onClick={moveNext}>다음</button>
      </div>
    </Container>
  );
};

export const Container = styled.div`
  width: 500px;
  height: 500px;

  overflow: hidden;
`;

export const ChartContainer = styled.div`
  display: flex;
`;

export default Carousel;
