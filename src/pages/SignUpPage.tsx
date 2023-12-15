import ModalForm from 'components/ModalForm';
import SignUpForm from 'components/SignUpForm';
import { FormTypes } from 'constants/index';
import { Helmet } from 'react-helmet';

const SignUpPage = () => (
  <>
    <Helmet>
      <title>Sign Up</title>
    </Helmet>
    <ModalForm formType={FormTypes.authForm}>
      <SignUpForm />
    </ModalForm>
  </>
);

export default SignUpPage;
