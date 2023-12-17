import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toasts } from 'utils';
import { deleteContact } from 'redux/contacts/operations';
import { useAppDispatch } from 'hooks/redux';
import { PagePaths } from 'constants/index';

const useDeleteContact = () => {
  const [contactId, setContactId] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { search, pathname } = useLocation();
  const redirectPath = `/${PagePaths.contactsPath + search}`;

  useEffect(() => {
    if (contactId) {
      dispatch(deleteContact(contactId))
        .unwrap()
        .then(() => {
          if (pathname.includes(contactId)) {
            navigate(redirectPath);
          }
          toasts.successToast('Contact successfully removed');
        })
        .catch(() => {
          toasts.errorToast('Deleting a contact failed');
        });
    }
  }, [contactId, dispatch, navigate, pathname, redirectPath]);

  return setContactId;
};

export default useDeleteContact;
