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
  padding-top: ${({ theme }) => theme.NAVBAR_HEIGHT.TOP}px;
  padding-bottom: ${({ theme }) => theme.NAVBAR_HEIGHT.BOTTOM}px;
  ${({ isRoot }: { isRoot: boolean }) => !isRoot && `padding-bottom: 0;`}

  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    ${({ isRoot }: { isRoot: boolean }) => !isRoot && `padding-bottom: 0;`}
  }

  & > * {
    width: 100%;
    height: 100%;
  }
`;

export default { Wrapper };
