import { FormContainer } from './AuthForm.styled';
import { IProps } from './AuthForm.types';

const AuthForm = ({ children }: IProps) => (
  <FormContainer>{children}</FormContainer>
);

export default AuthForm;
