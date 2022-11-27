import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: ${({ theme }) => theme.NAVBAR_HEIGHT}px;
  bottom: 0;
  left: 0;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid #f5f5f5;
  border-radius: 20px 20px 0px 0px;
`;

export const Content = styled.nav`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
`;
