import styled from "styled-components";
import { TierName } from "@constants/enums";
import Theme from "@styles/Theme";
import { RecordResult } from "@components/UserInfoSummary/style";

export const Wrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  height: 40vh;
`;

export const DefaultContainer = styled.div`
  height: 300px;
  line-height: 300px;
  width: 100%;
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
`;

export const UserBestTierContainer = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_GRAY};
`;

export const Tier = styled(RecordResult)`
  color: ${({ tier, theme }: { tier: TierName | null; theme: typeof Theme }) =>
    tier && theme.TIER_COLOR[tier]};
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_SMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  margin-top: 10px;
`;

export const TierLabel = styled.p``;

export const Caption = styled.div`
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  font-size: ${({ theme }) => theme.FONT_SIZE.TINY_SMALL};
`;

export const ChartArea = styled.div`
  text-align: right;
  height: 80%;
`;
