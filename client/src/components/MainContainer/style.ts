import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
`;

export const Wrapper = styled.div`
  margin: auto;
  padding: 20px;
  height: 100%;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
  & > * {
    width: 100%;
    height: 100%;
  }
`;

export default { Wrapper };
