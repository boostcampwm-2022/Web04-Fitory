import styled from "styled-components";
import { DefaultButton } from "@styles/Components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const AppInstallWrapper = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AppInstallTitle = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const AppInstallButton = styled(DefaultButton)`
  width: 300px;
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.DEFAULT};
`;

export const iOSExplanation = styled.p`
  line-height: 25px;
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  & > span {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  }
`;

export const InstallDeferButton = styled.button`
  width: fit-content;
  margin: auto;
  border-bottom: 1px solid;
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
`;
