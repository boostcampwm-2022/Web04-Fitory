import styled from "styled-components";
import Theme from "@styles/Theme";
import { HEAT_ITEM_SIZE } from "@constants/consts";

const HEAT_ITEM_STROKE_WIDTH = 2.5;

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px 40px;
  border-radius: 40px;
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
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
  fill: ${({ isEmpty, theme }: { isEmpty: boolean; theme: typeof Theme }) =>
    isEmpty ? theme.COLORS.WHITE : theme.COLORS.ASH_WHITE};
`;
