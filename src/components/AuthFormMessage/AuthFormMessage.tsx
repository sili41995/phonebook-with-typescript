import { Link } from 'react-router-dom';
import { IProps } from './AuthFormMessage.types';
import { Message } from './AuthFormMessage.styled';

export const AuthFormMessage = ({ message, pageLink, action }: IProps) => (
  <Message>
    <Link to={pageLink}>{action}</Link>
    {` ${message}`}
  </Message>
);

export default AuthFormMessage;
