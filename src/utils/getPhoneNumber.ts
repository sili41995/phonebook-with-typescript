const getPhoneNumber = (number: string = ''): string =>
  number
    .split('')
    .filter((symbol) => symbol === '+' || symbol !== '-')
    .join('');

export default getPhoneNumber;
