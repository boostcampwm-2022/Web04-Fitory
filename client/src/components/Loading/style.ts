import styled from "styled-components";
import { DefaultSpinner } from "@styles/Components";

export const Wrapper = styled.div`
  top: 0;
  gap: 25px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
`;

export const Logo = styled.img`
  width: 150px;
`;

export const Spinner = styled(DefaultSpinner)``;
