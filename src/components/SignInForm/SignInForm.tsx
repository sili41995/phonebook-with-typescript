import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Message, Title, Image } from './SignInForm.styled';
import defaultAvatar from 'images/default-signin-avatar.png';
import { toasts } from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import AuthFormBtn from 'components/AuthFormBtn/AuthFormBtn';
import { signInUser } from 'redux/auth/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectUser } from 'redux/auth/selectors';
import { ICredentials } from 'types/types';
import { PagePaths } from 'constants/index';
import AuthFormInputs from 'components/AuthFormInputs';

const SignInForm = () => {
  const user = useAppSelector(selectUser);
  const [credentials, setCredentials] = useState<ICredentials | null>(null);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    watch,
  } = useForm<ICredentials>();
  const watchPassword = watch('password');
  const signUpPageLink = `/${PagePaths.signUpPath}`;

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
        <AuthFormInputs
          watchPassword={watchPassword}
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
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
