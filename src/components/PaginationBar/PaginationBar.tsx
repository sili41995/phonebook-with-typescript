import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { IProps } from './PaginationBar.types';
import { getPageNumbers, getPaginationBarSettings } from 'utils';
import { SearchParamsKeys } from 'constants/searchParamsKeys';
import { Button, Item, List, TemplateItem } from './PaginationBar.styled';

const { PAGE_SP_KEY } = SearchParamsKeys;

const PaginationBar: FC<IProps> = ({ todosQuantity, quantity, step = 1 }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageQuantity = Math.round(todosQuantity / quantity);
  const pageNumbers = getPageNumbers(pageQuantity);
  const currentPage = Number(searchParams.get(PAGE_SP_KEY) ?? 1);
  const {
    firstPage,
    lastPage,
    isBackNavBtnDisable,
    isNextNavBtnDisable,
    isShowNextTemplateBtn,
    isShowLastPageBtn,
    isShowFirstPageBtn,
    isShowPrevTemplateBtn,
    isValidPage,
  } = getPaginationBarSettings({
    pageNumbers,
    currentPage,
    step,
  });

  const onPageBtnClick = (number: number): void => {
    searchParams.set(PAGE_SP_KEY, String(number));
    setSearchParams(searchParams);
  };

  return (
    <List>
      <Item>
        <Button
          disabled={isBackNavBtnDisable}
          onClick={() => {
            onPageBtnClick(currentPage - 1);
          }}
        >
          {'<<GoBack'}
        </Button>
      </Item>
      {isShowFirstPageBtn && (
        <Item>
          <Button
            onClick={() => {
              onPageBtnClick(firstPage);
            }}
          >
            {firstPage}
          </Button>
        </Item>
      )}
      {isShowPrevTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {isValidPage &&
        pageNumbers.map((number) => (
          <Item
            key={number}
            page={number}
            currentPage={currentPage}
            step={step}
          >
            <Button
              className={number === currentPage ? 'active' : ''}
              onClick={() => {
                onPageBtnClick(number);
              }}
            >
              {number}
            </Button>
          </Item>
        ))}
      {isShowNextTemplateBtn && (
        <TemplateItem>
          <Button disabled>...</Button>
        </TemplateItem>
      )}
      {isShowLastPageBtn && (
        <Item>
          <Button
            onClick={() => {
              onPageBtnClick(lastPage);
            }}
          >
            {lastPage}
          </Button>
        </Item>
      )}
      <Item>
        <Button
          disabled={isNextNavBtnDisable}
          onClick={() => {
            onPageBtnClick(currentPage + 1);
          }}
        >
          {'Next>>'}
        </Button>
      </Item>
    </List>
  );
};

export default PaginationBar;
