import { FC, useEffect } from 'react';
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaInfo,
  FaTelegramPlane,
  FaIdCardAlt,
  FaCheck,
} from 'react-icons/fa';
import { IconSizes, InputTypes, regExp } from 'constants/index';
import Input from 'components/Input';
import { toasts } from 'utils';
import { IProps } from './ContactFormInputs.types';
import { CheckboxTitle, InputWrap } from './ContactFormInputs.styled';

const ContactFormInputs: FC<IProps> = ({
  register,
  errors,
  isSubmitting,
  onCheckboxChange,
  checked,
  contact = {},
}) => {
  const {
    name = '',
    phone = '',
    email = '',
    role = '',
    tgUsername = '',
    description = '',
  } = contact;

  useEffect(() => {
    errors.name && toasts.errorToast('First name is required');
    errors.phone &&
      toasts.errorToast(
        errors.phone.type === 'required'
          ? 'Phone is required'
          : 'Phone number must be digits and can start with character +'
      );
    errors.email &&
      toasts.errorToast('Email must be letters, digits, dot and @');
  }, [errors, isSubmitting]);

  return (
    <>
      <Input
        settings={{ ...register('name', { required: true }) }}
        type={InputTypes.text}
        placeholder="Name"
        icon={<FaUser size={IconSizes.defaultIconSize} />}
        defaultValue={name}
        inputWrap
        autoFocus
      />
      <Input
        settings={{
          ...register('phone', { pattern: regExp.phoneRegEx, required: true }),
        }}
        type={InputTypes.text}
        placeholder="Phone"
        icon={<FaPhoneAlt size={IconSizes.defaultIconSize} />}
        defaultValue={phone}
        inputWrap
      />
      <Input
        settings={{
          ...register('email', {
            pattern: regExp.emailRegEx,
          }),
        }}
        type={InputTypes.email}
        placeholder="Email"
        icon={<FaEnvelope size={IconSizes.defaultIconSize} />}
        defaultValue={email}
        inputWrap
      />
      <Input
        settings={{
          ...register('role'),
        }}
        type={InputTypes.text}
        placeholder="Role"
        icon={<FaIdCardAlt size={IconSizes.defaultIconSize} />}
        defaultValue={role}
        inputWrap
      />
      <Input
        settings={{
          ...register('tgUsername'),
        }}
        type={InputTypes.text}
        placeholder="Telegram username"
        icon={<FaTelegramPlane size={IconSizes.defaultIconSize} />}
        defaultValue={tgUsername}
        inputWrap
      />
      <Input
        settings={{
          ...register('description'),
        }}
        type={InputTypes.text}
        placeholder="About contact"
        icon={<FaInfo size={IconSizes.defaultIconSize} />}
        defaultValue={description}
        inputWrap
      />
      <InputWrap>
        <CheckboxTitle>Favorite contact</CheckboxTitle>
        <Input
          settings={{ ...register('favorite') }}
          checked={checked}
          onChange={onCheckboxChange}
          type={InputTypes.checkbox}
          altElem={<FaCheck size={IconSizes.primaryIconSize} />}
        />
      </InputWrap>
    </>
  );
};

export default ContactFormInputs;
