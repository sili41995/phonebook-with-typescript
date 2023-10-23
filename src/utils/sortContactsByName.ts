import { SortTypes } from 'constants/sortTypes';
import { IContact } from 'types/types';

const { DESC_SORT_TYPE } = SortTypes;

const sortContactsByName = (contacts: IContact[], sortType: string) => {
  return contacts.toSorted(({ name: prevContact }, { name: nextContact }) =>
    sortType === DESC_SORT_TYPE
      ? nextContact.localeCompare(prevContact)
      : prevContact.localeCompare(nextContact)
  );
};

export default sortContactsByName;
