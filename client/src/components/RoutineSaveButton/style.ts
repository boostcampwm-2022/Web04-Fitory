import styled from "styled-components";
import { DefaultButton, OutlinedTextField } from "@styles/Components";

export const RoutineSaveButton = styled(DefaultButton)`
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  &:hover {
    background-color: #7c7d84;
  }
`;

export const RoutineNameTextField = styled(OutlinedTextField)`
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;

export const RoutineNameLabel = styled.h2`
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const RoutineNameSaveButton = styled(DefaultButton)`
  margin: auto;
  border-radius: 7px;
`;
