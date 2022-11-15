import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  height: 56px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid #f5f5f5;
  border-radius: 20px 20px 0px 0px;
`;

export const NavigationButton = styled.button`
  text-align: center;
  width: 25%;

  background-color: transparent;
  border: none;

  filter: ${(props) =>
    props
      ? "invert(52%) sepia(17%) saturate(1814%) hue-rotate(190deg) brightness(103%) contrast(96%)"
      : "invert(79%) sepia(1%) saturate(0%) hue-rotate(95deg) brightness(97%) contrast(95%)"};
`;
