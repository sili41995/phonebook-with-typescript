import { FC } from 'react';
import ContactsListItem from 'components/ContactsListItem';
import { IProps } from './ContactsList.types';
import { List } from './ContactsList.styled';

const ContactsList: FC<IProps> = ({ contacts }) => (
  <List>
    {contacts.map((contact) => (
      <ContactsListItem contact={contact} key={contact._id} />
    ))}
  </List>
);

export default ContactsList;
