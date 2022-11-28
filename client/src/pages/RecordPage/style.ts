import styled from "styled-components";
import { DefaultButton } from "@styles/Components";

export const RoutineWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const RoutineButton = styled.button`
  width: 83px;
  height: 83px;
`;

export const ExersiceItem = styled.div`
  margin-bottom: 20px;
  & > p {
    margin-bottom: 15px;
    font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  }
`;

export const ExerciseCountButton = styled(DefaultButton)`
  margin-top: 30px;
  padding: 5px 30px;
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
  & > span {
    font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_LARGE};
  }
`;
