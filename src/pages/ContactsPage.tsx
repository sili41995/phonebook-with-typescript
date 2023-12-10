import { Suspense, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import ContactsList from 'components/ContactsList';
import UserProfile from 'components/UserProfile';
import Loader from 'components/Loader';
import ContactsContainer from 'components/ContactsContainer';
import { selectIsLoaded, selectIsLoading } from 'redux/contacts/selectors';
import { fetchContacts } from 'redux/contacts/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';

const ContactsPage = () => {
  const dispatch = useAppDispatch();
  const isLoaded = useAppSelector(selectIsLoaded);
  const isLoading = useAppSelector(selectIsLoading);

  useEffect(() => {
    const promise = dispatch(fetchContacts());

    return () => {
      promise.abort();
    };
  }, [dispatch]);

  return (
    <>
      <UserProfile />
      {/* {isLoading ? <Loader /> : <ContactsList />} */}
      {isLoading ? <Loader /> : <ContactsContainer quantity={8} step={2} />}
      {/*

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default ContactsPage;
