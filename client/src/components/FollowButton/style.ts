import styled from "styled-components";

export const ProfileButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;
