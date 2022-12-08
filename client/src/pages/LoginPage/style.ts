import styled from "styled-components";

export const Background = styled.div`
  top: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
  background-color: #608bff;
`;

export const Logo = styled.img`
  width: 300px;
  height: 300px;
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

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;
