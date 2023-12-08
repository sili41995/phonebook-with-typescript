import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { AiFillLock } from 'react-icons/ai';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title } from './SignUpForm.styled';
import { getUserData, toasts } from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import Input from 'components/Input';
import { signUpUser } from 'redux/auth/operations';
import { selectIsLoading } from 'redux/auth/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { ISignUpCredentials } from 'types/types';
import { PagesPath } from 'constants/pagesPath';
import { FormTypes } from 'constants/formTypes';
import { IconSizes } from 'constants/iconSizes';
import { InputTypes } from 'constants/inputTypes';
import regEx from 'constants/regEx';

const SignUpForm = () => {
  const navigate = useNavigate();
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ISignUpCredentials>();
  const signInPageLink = `/${PagesPath.signInPath}`;

  const onSubmit: SubmitHandler<ISignUpCredentials> = (data) => {
    const userData = getUserData(data);
    console.log(userData);
    dispatch(signUpUser(userData))
      .unwrap()
      .then(() => {
        toasts.successToast('User has been successfully registered');
        navigate(signInPageLink);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  useEffect(() => {
    errors.name && toasts.errorToast('First name is required');
    errors.email &&
      toasts.errorToast(
        errors.email.type === 'required'
          ? 'Email is required'
          : 'Email must be letters, digits, dot and @'
      );
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? 'Password is required'
          : 'Password minimum length is 6 characters'
      );
    errors.phone &&
      toasts.errorToast(
        'Phone number must be digits and can start with character +'
      );
    errors.dateOfBirth &&
      toasts.errorToast('Date of birth must be in DD-MM-YYYY format');
  }, [errors, isSubmitting]);

  return (
    <>
      <Title>sign up</Title>
      <Message>Welcome to Phonebook!</Message>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{ ...register('name', { required: true }) }}
          type={InputTypes.text}
          placeholder="First name"
          icon={<FaUser size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
          autoFocus
        />
        <Input
          settings={{ ...register('lastName') }}
          type={InputTypes.text}
          placeholder="Last name"
          icon={<FaUser size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
        />
        <Input
          settings={{ ...register('phone', { pattern: regEx.phoneRegEx }) }}
          type={InputTypes.text}
          placeholder="Phone"
          icon={<MdPhone size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
        />
        <Input
          settings={{
            ...register('email', {
              required: true,
              pattern: regEx.emailRegEx,
            }),
          }}
          type={InputTypes.email}
          placeholder="Email"
          icon={<MdEmail size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 6 }),
          }}
          type={InputTypes.password}
          placeholder="Password"
          icon={<AiFillLock size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
        />
        <Input
          settings={{ ...register('location') }}
          type={InputTypes.text}
          placeholder="Location"
          icon={<FaUser size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
        />
        <Input
          settings={{
            ...register('dateOfBirth', { pattern: regEx.dateOfBirthRegEx }),
          }}
          type={InputTypes.text}
          placeholder="Date of birth"
          icon={<FaUser size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
        />
        <AuthFormMessage
          action="Sign in"
          pageLink={signInPageLink}
          message="if you have an account"
        />
        <Button disabled={isLoading} type="submit">
          Enlist
        </Button>
      </Form>
    </>
  );
};

export default SignUpForm;
