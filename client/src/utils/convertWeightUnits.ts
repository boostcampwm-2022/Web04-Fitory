import { WeightUnit } from "@constants/enums";

/**
 * kg 단위 무게를 적절한 단위로 변환하여 반환한다.
 * @param weight kg 단위 무게
 */
const convertWeightUnits = (weight: number) => {
  const DIVISOR = 1000;
  if (weight < DIVISOR) {
    return `${weight}${WeightUnit.KG}`;
  }

  const quotient = Math.floor(weight / DIVISOR);
  const remainder = weight % DIVISOR;
  return `${quotient}${remainder ? `.${remainder}` : ""}${WeightUnit.TON}`;
};

export default convertWeightUnits;
