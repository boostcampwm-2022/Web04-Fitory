import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  box-shadow: rgb(0 0 0 / 20%) 2px 4px 12px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  text-align: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH};
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
`;
