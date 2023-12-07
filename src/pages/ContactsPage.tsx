// import { Suspense, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import ContactsList from 'components/ContactsList';
// import UserProfile from 'components/UserProfile';
// import Loader from 'components/Loader';
// import { selectIsLoaded } from 'redux/contacts/selectors';
// import { fetchContacts } from 'redux/contacts/operations';
// import { useAppDispatch, useAppSelector } from 'hooks/redux';

const ContactsPage = () => {
  // const dispatch = useAppDispatch();
  // const isLoaded = useAppSelector(selectIsLoaded);

  // useEffect(() => {
  //   const promise = dispatch(fetchContacts());

  //   return () => {
  //     promise.abort();
  //   };
  // }, [dispatch]);

  return (
    <>
      {/* <UserProfile />
      {isLoaded && <ContactsList />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
    </>
  );
};

export default ContactsPage;
