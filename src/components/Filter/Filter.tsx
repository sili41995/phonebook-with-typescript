import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSistrix,
  FaTimes,
} from 'react-icons/fa';
import { makeBlur, updateSortSearchParams } from 'utils';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import {
  FormTypes,
  IconBtnType,
  IconSizes,
  InputTypes,
  SearchParamsKeys,
  SortTypes,
} from 'constants/index';
import { FilterContainer, ButtonsList, Item } from './Filter.styled';

const { FILTER_SP_KEY, SORT_SP_KEY } = SearchParamsKeys;
const { DESC_SORT_TYPE } = SortTypes;

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const [showFilter, setShowFilter] = useState<boolean>(() => Boolean(filter));
  const deskSortType = searchParams.get(SORT_SP_KEY) === DESC_SORT_TYPE;
  const clearFilterBtnIcon = Boolean(filter) && (
    <FaTimes size={IconSizes.primaryIconSize} />
  );
  const sortBtnIcon = deskSortType ? (
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
    updateSortSearchParams(searchParams, setSearchParams, SORT_SP_KEY);
  };

  const onFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    value
      ? searchParams.set(FILTER_SP_KEY, value)
      : searchParams.delete(FILTER_SP_KEY);
    setSearchParams(searchParams);
  };

  const onFilterBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    setShowFilter((showFilter) => !showFilter);
  };

  const onClearFilterBtnClick = () => {
    searchParams.delete(FILTER_SP_KEY);
    setSearchParams(searchParams);
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
            icon={<FaSistrix size={IconSizes.otherIconSize} />}
          />
        </Item>
        <Item>
          <IconButton
            btnType={IconBtnType.filter}
            onBtnClick={onSortBtnClick}
            icon={sortBtnIcon}
          />
        </Item>
      </ButtonsList>
    </FilterContainer>
  );
};

export default Filter;
