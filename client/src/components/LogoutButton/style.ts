import styled from "styled-components";
import { DefaultButton } from "@styles/Components";

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

export const LogoutTitle = styled.h1`
  margin-bottom: 40px;
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const ConfirmButton = styled(DefaultButton)`
  width: 100%;
  margin-bottom: 40px;
`;
