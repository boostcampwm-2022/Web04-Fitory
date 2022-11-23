import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: fit-content;
  /* flex-grow: 1; */
  /* overflow-y: auto; */
`;

export const Wrapper = styled.div`
  margin: auto;
  padding: ${({ theme }) => theme.NAVBAR_HEIGHT + 20}px 20px;
  height: 100%;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
  & > * {
    width: 100%;
    height: 100%;
  }
`;

export default { Wrapper };
