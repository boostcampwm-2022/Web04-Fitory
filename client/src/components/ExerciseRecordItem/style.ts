import styled from "styled-components";
import { DefaultTextField, OutlinedTextField } from "@styles/Components";

const TextField = styled(DefaultTextField)`
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const Wrapper = styled.div`
  width: 100%;
  gap: 30px;
  display: flex;
  flex-direction: column;
`;

export const ExerciseNameTextField = styled(OutlinedTextField)`
  width: 100%;
  padding: 10px;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;

export const Label = styled.p`
  width: 60px;
  margin-bottom: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const SetLabel = styled(Label)`
  width: 100%;
`;

export const ExerciseContentWrapper = styled.div`
  width: 100%;
  gap: 40px;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    gap: 10px;
  }
`;

export const SetCounterWrapper = styled.div`
  width: 120px;
  gap: 4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const SetCounter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  & > button {
    width: 30px;
    height: 30px;
    padding: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    & > img {
      width: 100%;
    }
  }
`;

export const WeightInfoWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const WeightInfoRow = styled.div`
  grid-gap: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 0.5fr;
  align-items: flex-end;
`;

export const WeightInfoTextField = styled(TextField)`
  width: 60px;
  padding: 10px;
  text-align: end;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;

export const CompleteToggleButton = styled.button`
  width: 30px;
  & > img {
    width: 100%;
  }
`;
