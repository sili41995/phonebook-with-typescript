import { IContact } from 'types/types';

interface IPops {
  filteredContacts: IContact[];
  quantity: number;
  currentPage: number;
}

const getVisibleContacts = ({
  filteredContacts,
  quantity,
  currentPage,
}: IPops): IContact[] => {
  const skip = (currentPage - 1) * quantity;

  return filteredContacts.slice(skip, quantity * currentPage);
};

export default getVisibleContacts;
