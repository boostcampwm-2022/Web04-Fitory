import styled from "styled-components";

const Wrapper = styled.div`
  height: fit-content;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const MyProfileContainer = styled(Wrapper)`
  padding: 30px 80px;
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 20px;
  }
`;

export const ButtonContainer = styled.div`
  height: 50px;
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;

export const BottomWrapper = styled(Wrapper)`
  margin-top: 10px;
  padding-top: 30px;
`;

export const BottomTitle = styled.h2`
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const ZandiLabel = styled.p`
  padding-left: 20px;
  color: ${({ theme }) => theme.COLORS.DEEP_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  & > span {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  }
`;
