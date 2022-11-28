const addZeroPaddingToNumber = (num: number) => {
  const numString = num.toString();
  if (numString.length === 1) {
    return `0${numString}`;
  }
  return numString;
};

export default addZeroPaddingToNumber;
