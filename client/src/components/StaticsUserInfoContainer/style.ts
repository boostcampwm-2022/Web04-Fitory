import styled from "styled-components";

export const UserData = styled.div`
  width: calc(100% / 3);

  :nth-child(2) {
    border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  }
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 10%;
  text-align: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  width: 80%;
  height: 60px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;
