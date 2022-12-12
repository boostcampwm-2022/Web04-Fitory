import calculateRemainingTime from "./calculateRemainingTime";

const getLastDateText = (targetDate: Date, currDate: Date) => {
  const timeDifference = calculateRemainingTime(currDate, targetDate);

  if (!timeDifference) {
    return "";
  }

  if (timeDifference.hours >= 168) {
    return `${Math.floor(timeDifference.hours / 168)}주`;
  }

  if (timeDifference.hours >= 24) {
    return `${Math.floor(timeDifference.hours / 24)}일`;
  }

  return `${timeDifference.hours}시간`;
};

export default getLastDateText;
