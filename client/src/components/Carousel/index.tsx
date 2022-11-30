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
    if (currentSlide < CHART_NUM) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  useEffect(() => {
    slideRef.current.style.transition = "all 0.5s ease-in-out";
    slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 에니메이션을 만듭니다.
  }, [currentSlide]);

  return (
    <Wrapper>
      <Container>
        <NavigationBar>
          <button onClick={movePrev}>통계</button>
          <button onClick={moveNext}>티어 변동</button>
        </NavigationBar>
        <ChartContainer ref={slideRef}>
          <TierGraph />
        </ChartContainer>
      </Container>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  padding-top: 50px;
`;

export const Container = styled.div`
  width: 100%;
  height: 500px;
  overflow: hidden;
`;

export const NavigationBar = styled.div`
  display: flex;
  width: 100%;
`;

export const ChartContainer = styled.div`
  display: flex;
  width: 200%;
  text-align: center;
  align-items: center;
`;

export default Carousel;
