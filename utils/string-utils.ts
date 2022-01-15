export const removeAllWhiteSpace = (str: string): string =>
  str.replace(/\s+/g, '');

export const capitalizer = (str: string): string =>
  str
    .trim()
    .toLowerCase()
    .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
