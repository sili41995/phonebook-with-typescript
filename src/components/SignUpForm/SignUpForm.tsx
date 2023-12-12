import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaLock,
  FaMapMarkerAlt,
  FaRegCalendarCheck,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Message, Title } from './SignUpForm.styled';
import {
  filterEmptyFields,
  getProfileFormData,
  onChangeAvatar,
  toasts,
} from 'utils';
import AuthFormMessage from 'components/AuthFormMessage';
import Input from 'components/Input';
import AuthFormBtn from 'components/AuthFormBtn/AuthFormBtn';
import { signUpUser } from 'redux/auth/operations';
import { useAppDispatch } from 'hooks/redux';
import { ISignUpCredentials } from 'types/types';
import {
  PagePaths,
  regEx,
  FormTypes,
  IconSizes,
  InputTypes,
} from 'constants/index';

const SignUpForm = () => {
  const [userAvatar, setUserAvatar] = useState<FileList | null>(null);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ISignUpCredentials>();
  const signInPageLink = `/${PagePaths.signInPath}`;
  const userAvatarRef = useRef<HTMLImageElement>(null);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setUserAvatar(e.target.files);
    onChangeAvatar({ e, ref: userAvatarRef });
  };

  const onSubmit: SubmitHandler<ISignUpCredentials> = (data) => {
    if (userAvatar) {
      data.avatar = userAvatar;
    }

    const userData = filterEmptyFields<ISignUpCredentials>(data);
    const formData = getProfileFormData(userData);

    dispatch(signUpUser(formData))
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
          settings={{ ...register('avatar') }}
          accept="image/png, image/jpeg, image/jpg"
          onChange={onChangeInput}
          type={InputTypes.file}
          imageRef={userAvatarRef}
        />
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
          icon={<FaPhoneAlt size={IconSizes.secondaryIconSize} />}
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
          icon={<FaEnvelope size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
        />
        <Input
          settings={{
            ...register('password', { required: true, minLength: 6 }),
          }}
          type={InputTypes.text}
          placeholder="Password"
          icon={<FaLock size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
        />
        <Input
          settings={{ ...register('location') }}
          type={InputTypes.text}
          placeholder="Location"
          icon={<FaMapMarkerAlt size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
        />
        <Input
          settings={{
            ...register('dateOfBirth', { pattern: regEx.dateOfBirthRegEx }),
          }}
          type={InputTypes.text}
          placeholder="Date of birth"
          icon={<FaRegCalendarCheck size={IconSizes.secondaryIconSize} />}
          formType={FormTypes.authForm}
          inputWrap
        />
        <AuthFormMessage
          action="Sign in"
          pageLink={signInPageLink}
          message="if you have an account"
        />
        <AuthFormBtn title="Enlist" />
      </Form>
    </>
  );
};

export default SignUpForm;
