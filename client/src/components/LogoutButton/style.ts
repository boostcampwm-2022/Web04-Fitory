import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  padding: 30px;
  text-align: center;
`;

export const Button = styled.button`
  width: fit-content;
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
`;
