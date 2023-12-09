import { FaLock, FaEnvelope, FaEyeSlash, FaEye } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Message, Title, Image } from './SignInForm.styled';
import defaultAvatar from 'images/default-signin-avatar.png';
import { toasts } from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import AuthFormBtn from 'components/AuthFormBtn/AuthFormBtn';
import Input from 'components/Input';
import { signInUser } from 'redux/auth/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectUser } from 'redux/auth/selectors';
import { ICredentials } from 'types/types';
import {
  InputTypes,
  IconSizes,
  FormTypes,
  IconBtnType,
  PagePaths,
} from 'constants/index';

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

  const greetings = `Welcome to Phonebook${user.name ? `, ${user.name}` : ''}!`;

  return (
    <>
      <Title>log in</Title>
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
