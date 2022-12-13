import styled from "styled-components";

export const Background = styled.div`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.MAX_WIDTH.DEFAULT};
  background-color: #608bff;
`;

export const Logo = styled.img`
  width: 250px;
`;

export const ExampleWrapper = styled.div`
  width: 330px;
  padding: 30px;
  border-radius: 20px;
  gap: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ExampleDescription = styled.p`
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const ExampleImage = styled.img`
  width: 150px;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 20%) 2px 4px 12px;
`;
