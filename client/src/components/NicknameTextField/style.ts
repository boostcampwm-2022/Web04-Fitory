import styled from "styled-components";
import { OutlinedTextField } from "@styles/Components";

export const TextFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.p`
  margin-top: 30px;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;

export const TextField = styled(OutlinedTextField)``;
