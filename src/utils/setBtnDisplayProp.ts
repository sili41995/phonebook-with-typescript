const setBtnDisplayProp = ({
  currentPage,
  page,
  step,
}: {
  [key: string]: number | undefined;
}): string | undefined => {
  if (currentPage && page) {
    return page - Number(step) > currentPage ||
      page + Number(step) < currentPage
      ? 'none'
      : 'block';
  }
};

export default setBtnDisplayProp;
