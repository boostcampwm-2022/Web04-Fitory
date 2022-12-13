import styled from "styled-components";
import { DefaultSpinner } from "@styles/Components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const NotiList = styled.div`
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const IntersectTarget = styled.div`
  height: 1px;
`;

export const Spinner = styled(DefaultSpinner)`
  margin: 20px auto;
  width: 20px;
  height: 20px;
  border-width: 3px;
`;
