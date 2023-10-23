import { PagesPath } from 'constants/pagesPath';
import { useParams } from 'react-router-dom';
import { selectContacts } from 'redux/contacts/selectors';
import { useAppSelector } from './redux';
import { IContact } from 'types/types';

const useTargetContact = (): IContact => {
  const id = useParams()[PagesPath.dynamicParam];
  const contacts: IContact[] = useAppSelector(selectContacts);
  const targetContact = contacts.find(({ id: contactId }) => contactId === id);
  const defaultContact = {
    id: '',
    name: '',
    number: '',
  };

  return targetContact ? targetContact : defaultContact;
};

export default useTargetContact;
