import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: fit-content;
  flex-grow: 1;
`;

export const Wrapper = styled.div`
  margin: auto;
  height: 100%;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
  padding: ${({ theme }) => theme.NAVBAR_HEIGHT}px 0;
  ${({ disableBottomNavBar }: { disableBottomNavBar: boolean }) =>
    disableBottomNavBar && `padding-bottom: 0;`}
  & > * {
    width: 100%;
    height: 100%;
  }
`;

export default { Wrapper };
