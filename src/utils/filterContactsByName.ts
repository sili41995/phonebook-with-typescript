import { IContact } from 'types/types';

const filterContactsByName = (
  contacts: IContact[],
  filter: string
): IContact[] =>
  filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

export default filterContactsByName;
