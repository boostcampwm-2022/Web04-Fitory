import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const NotiList = styled.div`
  overflow-y: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
