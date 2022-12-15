import React, { useState } from "react";
import { toast } from "react-toastify";
import { error } from "@constants/message";
import PageTemplate from "@pages/PageTemplate";
import ChallengeItem from "@components/ChallengeItem";
import Modal from "src/common/design/Modal";
import { Powerlifting, TierName, ModalKey } from "@constants/enums";
import squatSrc from "@public/images/img_squat.webp";
import benchpressSrc from "@public/images/img_benchpress.webp";
import deadliftSrc from "@public/images/img_deadlift.webp";
import useDecreaseTime from "@hooks/useDecreaseTime";
import useSubmitChallenge from "@hooks/query/challenge/useSubmitChallenge";
import useRecentChallengeTime from "@hooks/query/challenge/useRecentChallengeTime";
import addZeroPaddingToNumber from "@utils/addZeroPaddingToNumber";
import modalStore from "@stores/modalStore";
import * as s from "./style";

interface SBDWeightState {
  squat: number;
  benchpress: number;
  deadlift: number;
}

const initSBDWeight = {
  squat: 0,
  benchpress: 0,
  deadlift: 0,
};

const ChallengePage = () => {
  const { openModal } = modalStore();
  const { submitChallenge, challengeResult } = useSubmitChallenge();
  const { nowTimeStamp, targetTimeStamp } = useRecentChallengeTime();
  const remaingingTime = useDecreaseTime(targetTimeStamp, nowTimeStamp);

  const [SBDWeight, setSBDWeight] = useState<SBDWeightState>(initSBDWeight);

  const PowerliftingInfo = [
    {
      name: Powerlifting.SQUAT,
      imageSrc: squatSrc,
      weight: SBDWeight.squat,
      setWeight: (squat: number) => setSBDWeight({ ...SBDWeight, squat }),
    },
    {
      name: Powerlifting.BENCH_PRESS,
      imageSrc: benchpressSrc,
      weight: SBDWeight.benchpress,
      setWeight: (benchpress: number) => setSBDWeight({ ...SBDWeight, benchpress }),
    },
    {
      name: Powerlifting.DEADLIFT,
      imageSrc: deadliftSrc,
      weight: SBDWeight.deadlift,
      setWeight: (deadlift: number) => setSBDWeight({ ...SBDWeight, deadlift }),
    },
  ];

  const checkSBDWeightValidation = () => {
    if (!remaingingTime && SBDWeight.squat && SBDWeight.benchpress && SBDWeight.deadlift) {
      return true;
    }
    return false;
  };

  const handleClickSubmitButton = () => {
    if (remaingingTime) {
      toast.error(error.SUBMIT_CHALLENGE_TIME_LIMIT);
      return;
    }
    if (!checkSBDWeightValidation()) {
      toast.error(error.SUBMIT_CHALLENGE_EMPTY);
      return;
    }
    submitChallenge(SBDWeight);
    openModal(ModalKey.CHALLENGE_TIER);
    setSBDWeight(initSBDWeight);
  };

  return (
    <PageTemplate title="3대 챌린지" isRoot={false}>
      <s.Wrapper>
        {PowerliftingInfo.map(({ name, imageSrc, weight, setWeight }) => (
          <ChallengeItem
            key={name}
            name={name}
            imageSrc={imageSrc}
            weight={weight}
            setWeight={setWeight}
          />
        ))}
        <s.SubmitButton disabled={!checkSBDWeightValidation()} onClick={handleClickSubmitButton}>
          {remaingingTime ? (
            <>
              <span>{addZeroPaddingToNumber(remaingingTime.hours)} : </span>
              <span>{addZeroPaddingToNumber(remaingingTime.minutes)} : </span>
              <span>{addZeroPaddingToNumber(remaingingTime.seconds)}</span>
            </>
          ) : (
            "제출하기"
          )}
        </s.SubmitButton>
      </s.Wrapper>
      <Modal modalKey={ModalKey.CHALLENGE_TIER} isCenter>
        <s.TierDescroption>티어를 획득했습니다!</s.TierDescroption>
        <s.TierWrapper>
          <s.Tier tierName={TierName[challengeResult]}>{TierName[challengeResult]}</s.Tier>
        </s.TierWrapper>
      </Modal>
    </PageTemplate>
  );
};

export default ChallengePage;
