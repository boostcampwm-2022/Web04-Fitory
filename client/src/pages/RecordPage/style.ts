import styled from "styled-components";
import { DefaultButton } from "@styles/Components";

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.NAVBAR_HEIGHT}px);
  padding: 50px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 40px 25px;
  }
`;

export const RoutineWrapper = styled.div`
  width: 100%;
  padding-bottom: 20px;
  height: fit-content;
`;

export const RoutineButton = styled.button`
  width: 83px;
  height: 83px;
`;

export const ExerciseListWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
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
  padding: 0 10px;
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
  padding: 10px 30px;
  border-radius: 30px;
  gap: 10px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
    filter: saturate(0.5) !important;
  }
  & > span {
    padding-top: 2px;
  }
`;

export const SaveButtonWrapper = styled.div`
  margin: auto;
  margin-top: 80px;
  width: 410px;
  gap: 30px;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    width: 100%;
    gap: 10px;
  }
`;

export const RoutineSaveButton = styled(DefaultButton)`
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  &:hover {
    background-color: #7c7d84;
  }
`;

export const ExerciseSaveButton = styled(DefaultButton)`
  flex-grow: 1;
  border-radius: 7px;
`;