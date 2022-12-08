import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: -35px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  width: 80%;
  padding: 15px 0;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const UserDataWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  :nth-child(2) {
    border-right: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
    border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  }
`;

export const Label = styled.p``;

export const Data = styled.p`
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;
