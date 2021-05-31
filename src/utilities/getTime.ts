export const getTime = (ms: number) => {
  const date = new Date(ms * 1000);
  return `${padZero(date.getHours())}:${padZero(date.getMinutes())}`;
};

export const padZero = (n: number): string => (n < 10 ? `0${n}` : `${n}`);
