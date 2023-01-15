const changeNumber = (num: number, numForCeil: number, letter: string) => {
  return (num / numForCeil).toFixed(1).replace(/\.0$/, '') + letter;
};

export const formatNumber = (num: number) => {
  if (num >= 1_000_000_000) {
    return changeNumber(num, 1_000_000_000, 'G');
  }

  if (num >= 1_000_000) {
    return changeNumber(num, 1_000_000, 'M');
  }

  if (num >= 1_000) {
    return changeNumber(num, 1_000, 'K');
  }

  return num;
};
