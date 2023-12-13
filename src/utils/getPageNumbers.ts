const getPageNumbers = (quantity: number): number[] => {
  const numbers = [];

  for (let i = 1; i <= quantity; i += 1) {
    numbers.push(i);
  }

  return numbers;
};

export default getPageNumbers;
