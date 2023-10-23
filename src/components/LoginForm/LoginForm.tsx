import { MdEmail } from 'react-icons/md';
import {
  AiFillLock,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from 'react-icons/ai';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Button, Message, Title, Image } from './LoginForm.styled';
import defaultAvatar from '../default-signin-avatar.png';
import { toasts } from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import Input from 'components/Input';
import { selectIsLoading } from 'redux/auth/selectors';
import { loginUser } from 'redux/auth/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { ICredentials } from 'types/types';
import { PagesPath } from 'constants/pagesPath';
import { FormType } from 'constants/formType';
import { IconBtnType } from 'constants/iconBtnType';

const LoginForm = () => {
  const [credentials, setCredentials] = useState<ICredentials | null>(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<ICredentials>();
  const watchPassword = watch('password');
  const pageLink = `/${PagesPath.registerPath}`;

  const toggleIsShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  useEffect(() => {
    if (credentials) {
      const promise = dispatch(loginUser(credentials));
      promise.unwrap().then(() => {
        toasts.successToast('Hello, my friend!');
      });

      return () => {
        promise.abort();
      };
    }
  }, [credentials, dispatch]);

  useEffect(() => {
    errors.email && toasts.errorToast('Email is required');
    errors.password &&
      toasts.errorToast(
        errors.password.type === 'required'
          ? 'Password is required'
          : 'Password minimum length is 7 characters'
      );
  }, [errors]);

  const onSubmit: SubmitHandler<ICredentials> = (data) => {
    setCredentials(data);
  };

  return (
    <>
      <Title>log in</Title>
      <Message>Welcome to Phonebook!</Message>
      <Image src={defaultAvatar} alt="user avatar" />
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          settings={{ ...register('email', { required: true }) }}
          type="email"
          placeholder="Email"
          inputType={FormType.authForm}
          autoFocus
          inputWrap
          fieldIcon={<MdEmail />}
          fieldIconSize={20}
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 7 }),
          }}
          type={isShowPassword ? 'text' : 'password'}
          placeholder="Password"
          inputType={FormType.authForm}
          children={
            watchPassword &&
            (isShowPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />)
          }
          btnType={IconBtnType.toggleShowPassword}
          action={toggleIsShowPassword}
          inputWrap
          fieldIcon={<AiFillLock />}
          fieldIconSize={20}
        />
        <AuthFormMessage
          action={'Sign up'}
          pageLink={pageLink}
          message={"if you don't have an account yet"}
        />
        <Button disabled={isLoading} type="submit">
          Log in
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
