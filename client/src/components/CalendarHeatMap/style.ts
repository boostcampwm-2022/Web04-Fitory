import styled from "styled-components";
import Theme from "@styles/Theme";
import { HEAT_ITEM_SIZE } from "@constants/consts";
import { ExerciseState } from "@constants/enums";

const HEAT_ITEM_STROKE_WIDTH = 2.5;

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 40px;
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const Year = styled.h3`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.LARGE};
`;

export const HeatMap = styled.div`
  width: 100%;
  overflow-x: auto;
  text {
    fill: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  }
`;

export const HeatItem = styled.rect`
  width: ${HEAT_ITEM_SIZE}px;
  height: ${HEAT_ITEM_SIZE}px;
  stroke-width: ${HEAT_ITEM_STROKE_WIDTH};
  stroke: ${({ theme }) => theme.COLORS.WHITE};
  fill: ${({ exerciseState, theme }: { exerciseState: ExerciseState; theme: typeof Theme }) => {
    switch (exerciseState) {
      case ExerciseState.EXERCISE:
        return theme.COLORS.LIGHT_BLUE;
      case ExerciseState.REST:
        return theme.COLORS.LIGHT_PURPLE;
      case ExerciseState.IDLE:
        return theme.COLORS.ASH_WHITE;
      default:
        return theme.COLORS.WHITE;
    }
  }};
`;
