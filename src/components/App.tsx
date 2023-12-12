import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from 'components/PublicRoute';
import Loader from 'components/Loader';
import SharedLayout from 'components/SharedLayout';
import GlobalStyles from 'components/GlobalStyles';
import Toast from 'components/Toast';
import { selectIsRefreshing, selectToken } from 'redux/auth/selectors';
import { refreshUser } from 'redux/auth/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { PagePaths } from 'constants/index';

const SignUpPage = lazy(() => import('pages/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage'));
const AboutPage = lazy(() => import('pages/AboutPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));
const ContactInfo = lazy(() => import('components/ContactInfo'));
// const AddContactForm = lazy(() => import('components/AddContactForm'));
const ContactDetails = lazy(() => import('components/ContactDetails'));
// const ModalForm = lazy(() => import('components/ModalForm'));
// const ContactDescription = lazy(() => import('components/ContactDescription'));
const PrivateRoute = lazy(() => import('components/PrivateRoute'));

const {
  homePath,
  // newContactPath,
  signInPath,
  signUpPath,
  aboutPath,
  contactsPath,
  dynamicParam,
  contactPath,
} = PagePaths;

const App = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (!token) {
      return;
    }

    dispatch(refreshUser());
  }, [dispatch, token]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path={homePath} element={<SharedLayout />}>
          <Route
            index
            element={<PublicRoute restricted element={<SignInPage />} />}
          />
          <Route
            path={signInPath}
            element={<PublicRoute restricted element={<SignInPage />} />}
          />
          <Route
            path={signUpPath}
            element={<PublicRoute restricted element={<SignUpPage />} />}
          />
          <Route
            path={aboutPath}
            element={<PublicRoute element={<AboutPage />} />}
          />
          <Route
            path={contactsPath}
            element={<PrivateRoute element={<ContactsPage />} />}
          >
            <Route path={`:${dynamicParam}`} element={<ContactDetails />}>
              <Route path={contactPath} element={<ContactInfo />} />
              {/* <Route path={aboutPath} element={<ContactDescription />} /> */}
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            {/*
            <Route
              path={newContactPath}
              element={<ModalForm children={<AddContactForm />} />}
            />*/}
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toast />
      <GlobalStyles />
    </>
  );
};

export default App;
