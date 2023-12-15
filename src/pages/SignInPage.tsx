import SignInForm from 'components/SignInForm';
import ModalForm from 'components/ModalForm';
import { FormTypes } from 'constants/index';
import { Helmet } from 'react-helmet';

const SignInPage = () => (
  <>
    <Helmet>
      <title>Sign In</title>
    </Helmet>
    <ModalForm formType={FormTypes.authForm}>
      <SignInForm />
    </ModalForm>
  </>
);

export default SignInPage;
