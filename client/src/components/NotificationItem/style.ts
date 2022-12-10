import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 25px 70px;
  gap: 15px;
  line-height: 22px;
  display: flex;
  align-items: center;
  ${({ isRead }: { isRead: boolean }) => !isRead && `background-color: aliceblue;`}
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 40px 20px;
  }
`;

export const ProfileImage = styled.img`
  width: 60px;
`;

export const TextWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const NotiState = styled.h3`
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const NotiContent = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  & > span {
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  }
`;

export const NotiTime = styled.p`
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;
