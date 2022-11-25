import styled from "styled-components";
import { OutlinedTextField } from "@styles/TextField";

export const Wrapper = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
  & input {
    text-align: end;
  }
`;

export const Label = styled.h3`
  margin-top: 50px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;

export const TextField = styled(OutlinedTextField)``;
