/**
 * 현재 시간에서 목표 시간이 되기까지 남은 시간을 반환한다.
 * @param targetTime 목표 시간
 */
const calculateRemainingTime = (targetTime: Date, nowTime: Date) => {
  const timeDifference = +targetTime - +nowTime;

  if (timeDifference <= 0) {
    return null;
  }

  const remainingTime = {
    hours: Math.floor(timeDifference / (1000 * 60 * 60)),
    minutes: Math.floor((timeDifference / 1000 / 60) % 60),
    seconds: Math.floor((timeDifference / 1000) % 60),
  };

  return remainingTime;
};

export default calculateRemainingTime;
