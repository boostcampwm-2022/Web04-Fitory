import styled from "styled-components";

export const ExerciseInfo = styled.div`
  width: calc(100% / 3);
`;

export const ExerciseName = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;

export const ExerciseScore = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};

  margin: 20px 0 10px 0;
`;
