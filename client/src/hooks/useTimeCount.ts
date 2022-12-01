import { useState, useEffect } from "react";
import calculateRemainingTime from "@utils/calculateRemainingTime";

interface TimeState {
  hours: number;
  minutes: number;
  seconds: number;
}

const useTimeCount = (targetTime: Date) => {
  const [remainingTime, setRemainingTime] = useState<TimeState | null>(
    calculateRemainingTime(targetTime),
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      const time = calculateRemainingTime(targetTime);
      setRemainingTime(time);
      if (!time) {
        clearTimeout(timeout);
      }
    }, 1000);
    return () => clearTimeout(timeout);
  });

  return remainingTime;
};

export default useTimeCount;
