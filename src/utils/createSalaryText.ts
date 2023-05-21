export const createSalaryDescription = (from: number, to: number, currency: string) => {
  if (from && to && from !== 0) {
    return from === to ? `${from} ${currency}` : `${from} - ${to} ${currency}`;
  } else if (from && from !== 0) {
    return `от ${from} ${currency}`;
  } else {
    return 'сдельная';
  }
};
