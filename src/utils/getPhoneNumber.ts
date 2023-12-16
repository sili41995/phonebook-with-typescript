const getPhoneNumber = (number: string = ''): string =>
  number
    .split('')
    .filter((symbol) => symbol === '+' || !isNaN(Number(symbol)))
    .join('');

export default getPhoneNumber;
