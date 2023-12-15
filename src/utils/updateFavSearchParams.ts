import { SearchParamsKeys, FavoriteTypes } from 'constants/index';

const { TRUE_FAV_TYPE } = FavoriteTypes;

const updateFavSearchParams = (
  searchParams: URLSearchParams,
  setSearchParams: (arg: URLSearchParams) => void,
  key: SearchParamsKeys
) => {
  const favSearchParam = searchParams.get(key);
  const favType = favSearchParam === TRUE_FAV_TYPE;

  if (favType) {
    searchParams.delete(key);
  } else {
    searchParams.set(key, TRUE_FAV_TYPE);
  }

  setSearchParams(searchParams);
};

export default updateFavSearchParams;
