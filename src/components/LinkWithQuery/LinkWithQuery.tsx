import { Link, useLocation } from 'react-router-dom';
import { IProps } from './LinkWithQuery.types';

const LinkWithQuery = ({ children, to, ...props }: IProps) => {
  const { search } = useLocation();
  const path = to + search;

  return (
    <Link to={path} {...props}>
      {children}
    </Link>
  );
};

export default LinkWithQuery;
