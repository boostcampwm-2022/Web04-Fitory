import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
`;

export const ProfileButton = styled.button`
  width: 100%;
  height: 35px;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 50px;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;
