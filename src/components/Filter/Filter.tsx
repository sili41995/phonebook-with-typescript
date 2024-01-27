import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSistrix,
  FaTimes,
} from 'react-icons/fa';
import { makeBlur } from 'utils';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import {
  AriaLabels,
  FormTypes,
  IconBtnType,
  IconSizes,
  InputTypes,
  SearchParamsKeys,
  SortTypes,
} from 'constants/index';
import { FilterContainer, ButtonsList, Item } from './Filter.styled';
import useSetSearchParams from 'hooks/useSetSearchParams';

const { FILTER_SP_KEY, SORT_SP_KEY } = SearchParamsKeys;
const { DESC_SORT_TYPE, ASC_SORT_TYPE } = SortTypes;

const Filter = () => {
  const { searchParams, updateSearchParams, setSearchParams } =
    useSetSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const [showFilter, setShowFilter] = useState<boolean>(() => Boolean(filter));
  const descSortType = searchParams.get(SORT_SP_KEY) === DESC_SORT_TYPE;
  const clearFilterBtnIcon = Boolean(filter) && (
    <FaTimes size={IconSizes.primaryIconSize} />
  );
  const sortBtnIcon = descSortType ? (
    <FaSortAlphaDown size={IconSizes.primaryIconSize} />
  ) : (
    <FaSortAlphaUp size={IconSizes.primaryIconSize} />
  );

  useEffect(() => {
    if (!showFilter) {
      searchParams.delete(FILTER_SP_KEY);
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, showFilter]);

  const onSortBtnClick = ({ currentTarget }: MouseEvent<HTMLButtonElement>) => {
    makeBlur(currentTarget);
    const value = descSortType ? ASC_SORT_TYPE : DESC_SORT_TYPE;
    updateSearchParams({ key: SORT_SP_KEY, value });
  };

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    updateSearchParams({ key: FILTER_SP_KEY, value });
  };

  const onFilterBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    setShowFilter((showFilter) => !showFilter);
  };

  const onClearFilterBtnClick = () => {
    updateSearchParams({ key: FILTER_SP_KEY });
  };

  return (
    <FilterContainer>
      {showFilter && (
        <Input
          type={InputTypes.text}
          value={filter}
          onChange={onFilterChange}
          formType={FormTypes.filter}
          autoFocus
          inputWrap
          btnIcon={clearFilterBtnIcon}
          btnType={IconBtnType.clearFilter}
          action={onClearFilterBtnClick}
        />
      )}
      <ButtonsList>
        <Item>
          <IconButton
            btnType={IconBtnType.filter}
            onBtnClick={onFilterBtnClick}
            aria-label={AriaLabels.filter}
            icon={<FaSistrix size={IconSizes.otherIconSize} />}
          />
        </Item>
        <Item>
          <IconButton
            btnType={IconBtnType.filter}
            onBtnClick={onSortBtnClick}
            aria-label={AriaLabels.sort}
            icon={sortBtnIcon}
          />
        </Item>
      </ButtonsList>
    </FilterContainer>
  );
};

export default Filter;
