import styled from "styled-components";
import { DefaultButton } from "@styles/Components";
import { TierName } from "@constants/enums";
import Theme from "@styles/Theme";

export const Wrapper = styled.div`
  padding: 20px 0 50px 0;
  gap: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    width: 100%;
    height: fit-content;
    padding: 50px 100px;
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (max-width: ${({ theme }) => theme.MAX_WIDTH.MOBILE}) {
      padding: 30px;
      border-radius: 0;
    }
  }
`;

export const SubmitButton = styled(DefaultButton)`
  width: 80%;
  padding: 15px;
`;

export const TierWrapper = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tier = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE.EXTRA_LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
  animation: fadein 5s;
  -webkit-animation: fadein 5s;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  color: ${({ tierName, theme }: { tierName: TierName; theme: typeof Theme }) =>
    tierName && theme.TIER_COLOR[tierName]};
`;

export const TierDescroption = styled.p`
  margin: auto;
  font-weight: 600;
  font-size: ${({ theme }) => theme.FONT_SIZE.MEDIUM};
`;

export const TierConfirmButton = styled(DefaultButton)``;
