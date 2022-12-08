import { useState, useEffect } from "react";
import calculateRemainingTime from "@utils/calculateRemainingTime";

interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
}

const useDecreaseTime = (targetTime: Date, nowTime: Date) => {
  const [currTime, setCurrTime] = useState<Date>(nowTime);
  const [remainingTime, setRemainingTime] = useState<TimeState | null>(
    calculateRemainingTime(targetTime, nowTime),
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const updatedCurrTime = currTime;
      const updatedRemainingtime = calculateRemainingTime(targetTime, currTime);

      updatedCurrTime.setSeconds(updatedCurrTime.getSeconds() + 1);

      setCurrTime(updatedCurrTime);
      setRemainingTime(updatedRemainingtime);

      if (!updatedRemainingtime) {
        clearTimeout(timeout);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  });

  return remainingTime;
};

export default useDecreaseTime;
