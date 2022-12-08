import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export const ExerciseHistoryContainer = styled.div`
  width: 100%;
`;

export const NoticeContainer = styled.div`
  margin-top: 70px;
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  text-align: center;
`;
