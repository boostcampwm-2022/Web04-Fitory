export function classifyToTier(weight: number, volume: number) {
  let tier = 0;
  if (0 <= volume && volume < 100) {
    tier = 1;
  } else if (100 <= volume && volume < 200) {
    tier = 2;
  } else if (200 <= volume && volume < 300) {
    tier = 3;
  } else if (300 <= volume && volume < 400) {
    tier = 4;
  } else if (400 <= volume && volume < 500) {
    tier = 5;
  } else if (500 <= volume && volume < 600) {
    tier = 6;
  }
  return tier;
}
