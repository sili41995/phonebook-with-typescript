import { SortTypes } from 'constants/index';
import { IContact } from 'types/types';

const { DESC_SORT_TYPE } = SortTypes;

const sortContactsByName = (contacts: IContact[], sortType: string) => {
  return [...contacts].sort(({ name: prevContact }, { name: nextContact }) =>
    sortType === DESC_SORT_TYPE
      ? nextContact.localeCompare(prevContact)
      : prevContact.localeCompare(nextContact)
  );
};

export default sortContactsByName;
