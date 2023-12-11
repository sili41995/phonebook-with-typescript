import { useMemo, FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import PaginationBar from 'components/PaginationBar';
import { IProps } from './ContactsContainer.types';
import { SearchParamsKeys } from 'constants/index';
import { useAppSelector } from 'hooks/redux';
import { selectContacts } from 'redux/contacts/selectors';
import {
  filterContactsByName,
  getVisibleContacts,
  sortContactsByName,
} from 'utils';
import { Container } from './ContactsContainer.styled';
import ContactsList from 'components/ContactsList';
import DefaultMessage from 'components/DefaultMessage';

const { FILTER_SP_KEY, SORT_SP_KEY, PAGE_SP_KEY } = SearchParamsKeys;

const ContactsContainer: FC<IProps> = ({ quantity, step }) => {
  const contacts = useAppSelector(selectContacts);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(SORT_SP_KEY) ?? '';
  const currentPage = Number(searchParams.get(PAGE_SP_KEY) ?? 1);
  const isValidPage = currentPage > 0;

  const filteredContacts = useMemo(() => {
    const sortedContacts = sortContactsByName(contacts, sortType);
    return filterContactsByName(sortedContacts, filter);
  }, [contacts, filter, sortType]);

  const visibleContacts = getVisibleContacts({
    filteredContacts,
    quantity,
    currentPage,
  });

  const isShouldRenderList = isValidPage && Boolean(visibleContacts.length);

  return (
    <Container>
      {isShouldRenderList ? (
        <>
          <ContactsList contacts={visibleContacts} />
          <PaginationBar
            quantity={quantity}
            step={step}
            itemsQuantity={filteredContacts.length}
          />
        </>
      ) : (
        <DefaultMessage message="Contact list is empty" />
      )}
    </Container>
  );
};

export default ContactsContainer;
