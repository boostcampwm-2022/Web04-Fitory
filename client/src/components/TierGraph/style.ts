import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 40vh;
`;

export const DefaultContainer = styled.div`
  height: 300px;
  line-height: 300px;
  width: 100%;

  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;
