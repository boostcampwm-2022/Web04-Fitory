import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import TierGraph from "@components/TierGraph";
import styled from "styled-components";

const CHART_NUM = 1;

const Carousel = () => {
  const [isHistogram, setIsHistogram] = useState(true);
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
    <Wrapper>
      <Container>
        <NavigationBar>
          <NavigationButton onClick={movePrev}>통계</NavigationButton>
          <NavigationButton onClick={moveNext}>티어 변동</NavigationButton>
        </NavigationBar>
        <StaticsContainer ref={slideRef}>
          <ChartContainer />
          <ChartContainer>
            <TierGraph />
          </ChartContainer>
        </StaticsContainer>
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
  padding: 10px;
  display: flex;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  margin-bottom: 50px;
`;

export const NavigationButton = styled.button`
  width: 50%;

  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const StaticsContainer = styled.div`
  display: flex;
  width: 200%;
  text-align: center;
  align-items: center;
`;

export const ChartContainer = styled.div`
  width: 50%;
`;

export default Carousel;
