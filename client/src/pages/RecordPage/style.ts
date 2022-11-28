import styled from "styled-components";
import { DefaultButton } from "@styles/Components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const RoutineWrapper = styled.div`
  padding: 25px;
  width: 100%;
  height: fit-content;
`;

export const RoutineButton = styled.button`
  width: 83px;
  height: 83px;
`;

export const ExerciseListWrapper = styled.div`
  width: 100%;
  padding: 40px 25px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_GRAY};
`;

export const ExersiceItem = styled.div`
  width: 400px;
  margin-bottom: 20px;
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    width: 100%;
  }
`;

export const ExersiceHeader = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  }
`;

export const ExersiceDecreaseButton = styled.button`
  &:hover {
    filter: opacity(0.5);
  }
`;

export const ExerciseIncreaseButton = styled(DefaultButton)`
  margin-top: 30px;
  padding: 10px 30px;
  border-radius: 30px;
  gap: 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
    filter: saturate(0.5) !important;
  }
`;
