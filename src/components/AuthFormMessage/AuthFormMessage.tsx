import { Link } from 'react-router-dom';
import { Message } from './AuthFormMessage.styled';
import { IProps } from './AuthFormMessage.types';

export const AuthFormMessage = ({ message, pageLink, action }: IProps) => (
  <Message>
    <Link to={pageLink}>{action}</Link>
    {` ${message}`}
  </Message>
);

export default AuthFormMessage;
