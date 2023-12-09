// import { useEffect, useRef } from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { toasts } from 'utils';
// import { selectIsLoggedIn } from 'redux/auth/selectors';
// import { useAppSelector } from 'hooks/redux';
import { IProps } from './PublicRoute.types';

export const PublicRoute = ({ element, restricted = false }: IProps) => {
  // const isFirstRenderRef = useRef<boolean>(true);
  // const isLoggedIn = useAppSelector(selectIsLoggedIn);
  // const location = useLocation();
  // const shouldRedirect = isLoggedIn && restricted;
  // const defaultGoBackPath = `/${PagesPath.contactsPath}`;
  // const goBackPath = location.state?.from ?? defaultGoBackPath;
  // const isShowWarnToast =
  //   location.state && !isLoggedIn && isFirstRenderRef.current;

  // useEffect(() => {
  //   isShowWarnToast && toasts.warnToast('Please, authenticate in the app');
  //   isFirstRenderRef.current = false;
  // }, [isShowWarnToast]);

  // return shouldRedirect ? <Navigate to={goBackPath} /> : element;
  return element;
};

export default PublicRoute;
