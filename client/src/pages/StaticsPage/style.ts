import styled from "styled-components";

export const UserInfoContainer = styled.div`
  position: relative;
  text-align: center;
  height: 230px;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;

export const ScoreContainer = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
`;
