import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: ${({ theme }) => theme.NAVBAR_HEIGHT}px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid #f5f5f5;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
`;

export const LeftItem = styled.div`
  margin-right: auto;
`;

export const RightItem = styled.div`
  margin-left: auto;
`;
