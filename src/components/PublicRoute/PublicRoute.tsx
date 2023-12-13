import { useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { toasts } from 'utils';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useAppSelector } from 'hooks/redux';
import { IProps } from './PublicRoute.types';
import { PagePaths } from 'constants/index';

export const PublicRoute = ({ element, restricted = false }: IProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const location = useLocation();
  const shouldRedirect = isLoggedIn && restricted;
  const defaultGoBackPath = `/${PagePaths.contactsPath}`;
  const goBackPath = location.state?.from ?? defaultGoBackPath;
  const isShowWarnToast = location.state && !isLoggedIn;

  useEffect(() => {
    isShowWarnToast && toasts.warnToast('Please, authenticate in the app');
  });

  return shouldRedirect ? <Navigate to={goBackPath} /> : element;
};

export default PublicRoute;
