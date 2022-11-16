import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const LeftItem = styled.div`
  margin-right: auto;
`;

export const RightItem = styled.div`
  margin-left: auto;
`;
