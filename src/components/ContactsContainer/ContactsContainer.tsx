import { useMemo, FC } from 'react';
// import { useSearchParams } from 'react-router-dom';
import PaginationBar from 'components/PaginationBar';
// import TodosList from 'components/TodosList';
import { IProps } from './ContactsContainer.types';
import { SearchParamsKeys } from 'constants/index';
// import { useAppSelector } from 'hooks/redux';
// import { selectTodos } from 'redux/todos/selectors';
import { sortContactsByName } from 'utils';
import { Container } from './ContactsContainer.styled';

const { FILTER_SP_KEY, SORT_SP_KEY, PAGE_SP_KEY } = SearchParamsKeys;

const TodosContainer: FC<IProps> = ({ quantity, step }) => {
  // const todos = useAppSelector(selectTodos);
  // const [searchParams] = useSearchParams();
  // const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(SORT_SP_KEY) ?? '';
  // const currentPage = Number(searchParams.get(PAGE_SP_KEY) ?? 1);

  const filteredContacts = useMemo(() => {
    const sortedContacts = sortContactsByName(contacts, sortType);
    return filterContactsByName(sortedContacts, filter);
  }, [contacts, filter, sortType]);

  // const visibleTodos = getVisibleTodos({
  //   filteredTodos,
  //   quantity,
  //   currentPage,
  // });

  return (
    <Container>
      {/* <TodosList visibleTodos={visibleTodos} currentPage={currentPage} />
       */}
      <PaginationBar
        quantity={quantity}
        step={step}
        todosQuantity={filteredContacts.length}
      />
    </Container>
  );
};

export default TodosContainer;
