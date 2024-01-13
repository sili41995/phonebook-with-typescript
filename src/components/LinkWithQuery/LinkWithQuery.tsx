import { Link, useLocation } from 'react-router-dom';
import { IProps } from './LinkWithQuery.types';

const LinkWithQuery = ({ children, to, ...otherProps }: IProps) => {
  const { search } = useLocation();
  const path = to + search;

  return (
    <Link to={path} {...otherProps}>
      {children}
    </Link>
  );
};

export default LinkWithQuery;
