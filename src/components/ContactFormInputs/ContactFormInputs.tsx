import { FC, useEffect } from 'react';
import Input from 'components/Input';
import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaInfo,
  FaTelegramPlane,
  FaIdCardAlt,
} from 'react-icons/fa';
import { IconSizes, InputTypes, regEx } from 'constants/index';
import { toasts } from 'utils';
import { IProps } from './ContactFormInputs.types';

const ContactFormInputs: FC<IProps> = ({ register, errors, isSubmitting }) => {
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
        inputWrap
        autoFocus
      />
      <Input
        settings={{
          ...register('phone', { pattern: regEx.phoneRegEx, required: true }),
        }}
        type={InputTypes.text}
        placeholder="Phone"
        icon={<FaPhoneAlt size={IconSizes.defaultIconSize} />}
        inputWrap
      />
      <Input
        settings={{
          ...register('email', {
            pattern: regEx.emailRegEx,
          }),
        }}
        type={InputTypes.email}
        placeholder="Email"
        icon={<FaEnvelope size={IconSizes.defaultIconSize} />}
        inputWrap
      />
      <Input
        settings={{
          ...register('role'),
        }}
        type={InputTypes.email}
        placeholder="Role"
        icon={<FaIdCardAlt size={IconSizes.defaultIconSize} />}
        inputWrap
      />
      <Input
        settings={{
          ...register('tgUsername'),
        }}
        type={InputTypes.email}
        placeholder="Telegram username"
        icon={<FaTelegramPlane size={IconSizes.defaultIconSize} />}
        inputWrap
      />
      <Input
        settings={{
          ...register('description'),
        }}
        type={InputTypes.email}
        placeholder="About contact"
        icon={<FaInfo size={IconSizes.defaultIconSize} />}
        inputWrap
      />
    </>
  );
};

export default ContactFormInputs;
