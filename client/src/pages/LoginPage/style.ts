import styled from "styled-components";

export const Background = styled.div`
  top: 0;
  gap: 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
  background-color: #608bff;
`;

export const Logo = styled.img`
  width: 250px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 80px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;
