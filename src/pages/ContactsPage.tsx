import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ContactsList from 'components/ContactsList';
import UserProfile from 'components/UserProfile';
import Loader from 'components/Loader';
import ContactsContainer from 'components/ContactsContainer';
import { selectIsLoaded, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import contactsServiceApi from 'service/contactsServiceApi';
import { ICurrentUser } from 'types/types';
import { toasts } from 'utils';
import { FetchStatuses } from 'constants/index';

const { idle, pending, resolved, rejected } = FetchStatuses;

const ContactsPage = () => {
  const [user, setUser] = useState<ICurrentUser | null>(null);
  const [fetchUserStatus, setFetchUserStatus] = useState<FetchStatuses>(
    () => idle
  );
  const dispatch = useAppDispatch();
  const isLoadingContacts = useAppSelector(selectIsLoading);
  const isLoadingUser = fetchUserStatus === pending;
  const showLoader = isLoadingUser || isLoadingContacts;

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const getUser = async () => {
      setFetchUserStatus(pending);
      try {
        const user = await contactsServiceApi.refreshUser();
        setUser(user);
        setFetchUserStatus(resolved);
      } catch (error) {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
          setFetchUserStatus(rejected);
        }
      }
    };

    getUser();
  }, []);

  return (
    <>
      {showLoader ? (
        <Loader />
      ) : (
        <>
          <UserProfile user={user} />
          <ContactsContainer quantity={6} step={2} />
        </>
      )}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ContactsPage;
