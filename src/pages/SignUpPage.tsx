import ModalForm from 'components/ModalForm';
import SignUpForm from 'components/SignUpForm';
import { FormTypes } from 'constants/index';

const SignUpPage = () => (
  <ModalForm formType={FormTypes.authForm}>
    <SignUpForm />
  </ModalForm>
);

export default SignUpPage;
