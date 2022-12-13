import styled, { keyframes } from "styled-components";

const boxOpenAnimation = keyframes` 
  0% {
    opacity: 0;
    transform: translate3d(0, -10%, 0);
  } 
  to {
    opacity: 1;transform: translateZ(0);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  animation: ${boxOpenAnimation} 1s;
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
