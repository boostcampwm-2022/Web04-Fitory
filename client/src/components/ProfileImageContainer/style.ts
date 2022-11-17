import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const ImageContainer = styled.img`
  width: 100%;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
`;
