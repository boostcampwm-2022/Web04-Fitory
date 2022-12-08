import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  text-align: center;
  height: 230px;
`;

export const ScoreContainer = styled.div`
  color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  width: 100%;
  height: 200px;
  padding-bottom: 20px;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
`;
