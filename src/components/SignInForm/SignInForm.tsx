import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { toasts } from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import Input from 'components/Input';
import AuthFormBtn from 'components/AuthFormBtn/AuthFormBtn';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { signInUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';
import { ICredentials } from 'types/types';
import {
  FormTypes,
  IconBtnType,
  IconSizes,
  InputTypes,
  PagePaths,
} from 'constants/index';
import defaultAvatar from 'images/default-signin-avatar.png';
import { Form, Message, Title, Image } from './SignInForm.styled';

const SignInForm = () => {
  const user = useAppSelector(selectUser);
  const [credentials, setCredentials] = useState<ICredentials | null>(null);
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm<ICredentials>();
  const passwordInputType = isShowPassword
    ? InputTypes.text
    : InputTypes.password;
  const watchPassword = watch('password');
  const passwordBtnIcon =
    Boolean(watchPassword) &&
    (isShowPassword ? (
      <FaEyeSlash size={IconSizes.secondaryIconSize} />
    ) : (
      <FaEye size={IconSizes.secondaryIconSize} />
    ));
  const signUpPageLink = `/${PagePaths.signUpPath}`;
  const greetings = `Welcome to Phonebook${user.name ? `, ${user.name}` : ''}!`;

  const toggleIsShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (credentials) {
      const promise = dispatch(signInUser(credentials));
      promise
        .unwrap()
        .then(() => {
          toasts.successToast('Hello, my friend!');
        })
        .catch((error) => {
          toasts.errorToast(error);
        });

      return () => {
        promise.abort();
      };
    }
  }, [credentials, dispatch]);

  useEffect(() => {
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
  }, [isSubmitting, errors]);

  const onSubmit: SubmitHandler<ICredentials> = (data) => {
    setCredentials(data);
  };

  return (
    <>
      <Title>sign in</Title>
      <Message>{greetings}</Message>
      <Image src={user.avatar ?? defaultAvatar} alt="user avatar" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          type={InputTypes.email}
          placeholder="Email"
          icon={<FaEnvelope size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
          autoFocus
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 6 }),
          }}
          type={passwordInputType}
          placeholder="Password"
          icon={<FaLock size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
          btnType={IconBtnType.toggleShowPassword}
          btnIcon={passwordBtnIcon}
          action={toggleIsShowPassword}
        />
        <AuthFormMessage
          action="Sign up"
          pageLink={signUpPageLink}
          message="if you don't have an account yet"
        />
        <AuthFormBtn title="Sign in" />
      </Form>
    </>
  );
};

export default SignInForm;
