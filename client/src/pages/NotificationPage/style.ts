import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 50px 100px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 20px;
  }
`;

export const NotiList = styled.div`
  overflow-y: auto;
  height: 100%;
  gap: 25px;
  display: flex;
  flex-direction: column;
`;
