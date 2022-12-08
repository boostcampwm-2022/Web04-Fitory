import styled from "styled-components";

export const ExerciseHistoryContainer = styled.div`
  width: 100%;
  height: 500px;
`;

export const NoticeContainer = styled.div`
  margin-top: 50px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  border-radius: 20px;
  text-align: center;
  width: 100%;
  padding: 30px;
`;
