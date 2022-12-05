import styled from "styled-components";
import { DefaultButton } from "@styles/Components";

export const ExerciseListWrapper = styled.div`
  width: 100%;
  padding-top: 40px;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_GRAY};
`;

export const ExersiceItem = styled.div`
  width: 480px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
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
