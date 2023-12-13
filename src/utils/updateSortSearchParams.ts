import { SearchParamsKeys, SortTypes } from 'constants/index';

const { ASC_SORT_TYPE, DESC_SORT_TYPE } = SortTypes;

const updateSortSearchParams = (
  searchParams: URLSearchParams,
  setSearchParams: (arg: URLSearchParams) => void,
  key: SearchParamsKeys
) => {
  const sortSearchParam = searchParams.get(key);
  const descSortType = sortSearchParam === DESC_SORT_TYPE;
  const updateSortValue = descSortType ? ASC_SORT_TYPE : DESC_SORT_TYPE;
  searchParams.set(key, updateSortValue);
  setSearchParams(searchParams);
};

export default updateSortSearchParams;
