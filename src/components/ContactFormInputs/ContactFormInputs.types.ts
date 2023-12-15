import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { IContact } from 'types/types';

export interface IProps {
  register: UseFormRegister<IContact>;
  errors: FieldErrors<IContact>;
  isSubmitting: boolean;
  contact?: IContact;
  checked?: boolean;
  onCheckboxChange?: () => void;
}
