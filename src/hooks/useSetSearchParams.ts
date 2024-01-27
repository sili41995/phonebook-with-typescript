import { useSearchParams } from 'react-router-dom';
import { IUpdateSearchParamsProps, IUseSetSearchParams } from 'types/types';

const useSetSearchParams = (): IUseSetSearchParams => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateSearchParams = ({
    key,
    value,
  }: IUpdateSearchParamsProps): void => {
    value ? searchParams.set(key, value) : searchParams.delete(key);
    setSearchParams(searchParams);
  };

  return { updateSearchParams, searchParams, setSearchParams };
};

export default useSetSearchParams;
