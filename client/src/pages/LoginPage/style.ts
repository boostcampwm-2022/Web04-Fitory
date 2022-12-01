import styled from "styled-components";

export const Background = styled.div`
  padding: 20px;
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
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;
