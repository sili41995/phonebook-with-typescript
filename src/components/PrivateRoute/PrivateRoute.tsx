import { Navigate, useLocation } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/auth/selectors';
import { useAppSelector } from 'hooks/redux';
import { IProps } from './PrivateRoute.types';
import { PagePaths } from 'constants/index';

const PrivateRoute = ({ element }: IProps) => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const location = useLocation();
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const homePath = `/${PagePaths.signInPath}`;

  return shouldRedirect ? (
    <Navigate to={homePath} state={{ from: location }} />
  ) : (
    element
  );
};

export default PrivateRoute;
