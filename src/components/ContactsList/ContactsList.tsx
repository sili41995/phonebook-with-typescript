import ContactsListItem from 'components/ContactsListItem';
import { List } from './ContactsList.styled';
import { IProps } from './ContactsList.types';
import { FC } from 'react';

const ContactsList: FC<IProps> = ({ contacts }) => (
  <List>
    {contacts.map((contact) => (
      <ContactsListItem contact={contact} key={contact._id} />
    ))}
  </List>
);

export default ContactsList;
