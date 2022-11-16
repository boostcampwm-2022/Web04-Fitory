import styled from "styled-components";

export const Wrapper = styled.div`
  margin: auto;
  height: 100%;
  max-width: ${({ theme }) => theme.MAX_WIDTH.default};
  & > * {
    width: 100%;
    height: 100%;
  }
`;

export default { Wrapper };
