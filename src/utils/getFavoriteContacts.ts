import { IContact } from 'types/types';

const getFavoriteContacts = (contacts: IContact[]): IContact[] =>
  contacts.filter(({ favorite }) => favorite);

export default getFavoriteContacts;
