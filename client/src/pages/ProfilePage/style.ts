import styled from "styled-components";

export const MyProfileContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 30px 80px;
  height: fit-content;
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 20px;
  }
`;

export const ButtonContainer = styled.div`
  height: 50px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;
