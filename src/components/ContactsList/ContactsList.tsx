import ContactsListItem from 'components/ContactsListItem';
import { Container, List } from './ContactsList.styled';
import { IProps } from './ContactsList.types';
import { FC } from 'react';

const ContactsList: FC<IProps> = ({ contacts }) => (
  <Container>
    <List>
      {contacts.map((contact) => (
        <ContactsListItem contact={contact} key={contact._id} />
      ))}
    </List>
  </Container>
);

export default ContactsList;
