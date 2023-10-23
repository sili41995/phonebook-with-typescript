import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toasts } from 'utils';
import { deleteContact } from 'redux/contacts/operations';
import { useAppDispatch } from 'hooks/redux';
import { PagesPath } from 'constants/pagesPath';

const useDeleteContact = () => {
  const [contactId, setContactId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search } = useLocation();
  const path = `/${PagesPath.contactsPath + search}`;

  useEffect(() => {
    if (contactId) {
      dispatch(deleteContact(contactId))
        .unwrap()
        .then(() => {
          navigate(path);
          toasts.successToast('Contact successfully removed');
        })
        .catch(() => {
          toasts.errorToast('Deleting a contact failed');
        });
    }
  }, [contactId, dispatch, navigate, path]);

  return setContactId;
};

export default useDeleteContact;
