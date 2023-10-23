import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ContactsListItem from 'components/ContactsListItem';
import DefaultMessage from 'components/DefaultMessage';
import { Container, List } from './ContactsList.styled';
import { filterContactsByName, sortContactsByName } from 'utils';
import { selectContacts } from 'redux/contacts/selectors';
import { useAppSelector } from 'hooks/redux';
import { SearchParamsKeys } from 'constants/searchParamsKeys';

const { FILTER_SP_KEY, SORT_SP_KEY } = SearchParamsKeys;

const ContactsList = () => {
  const contacts = useAppSelector(selectContacts);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get(FILTER_SP_KEY) ?? '';
  const sortType = searchParams.get(SORT_SP_KEY) ?? '';

  const filteredContacts = useMemo(() => {
    const sortedContacts = sortContactsByName(contacts, sortType);
    return filterContactsByName(sortedContacts, filter);
  }, [contacts, filter, sortType]);

  return (
    <Container>
      {!!contacts.length ? (
        <List>
          {filteredContacts.map((contact) => (
            <ContactsListItem contact={contact} key={contact.id} />
          ))}
        </List>
      ) : (
        <DefaultMessage message="Contact list is empty" />
      )}
    </Container>
  );
};

export default ContactsList;
