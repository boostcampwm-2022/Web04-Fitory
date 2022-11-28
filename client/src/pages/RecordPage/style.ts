import styled from "styled-components";

export const RoutineWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 40px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const RoutineButton = styled.button`
  width: 83px;
  height: 83px;
`;
