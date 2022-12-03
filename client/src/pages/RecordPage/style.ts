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
    padding: 30px 15px;
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

export const SaveButtonWrapper = styled.div`
  margin: auto;
  margin-top: 80px;
  width: 460px;
  gap: 30px;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    width: 95%;
    gap: 20px;
  }
`;

export const ExerciseSaveButton = styled(DefaultButton)`
  flex-grow: 1;
  border-radius: 7px;
`;
