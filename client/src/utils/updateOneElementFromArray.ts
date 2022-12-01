const updateOneElementFromArray = <T>(array: T[], targetIndex: number, replaceElement?: T): T[] => {
  if (replaceElement) {
    return [...array.slice(0, targetIndex), replaceElement, ...array.slice(targetIndex + 1)];
  }
  return [...array.slice(0, targetIndex), ...array.slice(targetIndex + 1)];
};

export default updateOneElementFromArray;
