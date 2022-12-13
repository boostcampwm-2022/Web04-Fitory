import styled from "styled-components";
import Theme from "@styles/Theme";
import { TierName } from "@constants/enums";

export const Wrapper = styled.div`
  padding: 30px 50px;
  gap: 20px;
  display: flex;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    padding: 30px;
  }
`;

export const TextInfoWrapper = styled.div`
  gap: 25px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: ${({ theme }) => theme.COLORS.DEEP_BLUE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
`;

export const UserName = styled.h3`
  padding-bottom: 15px;
  border-bottom: ${({ theme }) => `1px solid ${theme.COLORS.PLACEHOLDER_GRAY}`};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
`;

export const RecordInfoWrapper = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(4, 1fr);
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const RecordInfo = styled.div`
  gap: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    &:last-child {
      display: none;
    }
  }
`;

export const RecordResult = styled.h2`
  color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  font-size: ${({ theme }) => theme.FONT_SIZE.SMALL};
  @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
    font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  }
`;

export const Tier = styled(RecordResult)`
  color: ${({ tier, theme }: { tier: TierName | null; theme: typeof Theme }) =>
    tier && theme.TIER_COLOR[tier]};
`;

export const ChallengeRequestText = styled.p`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.DEFAULT};
`;
