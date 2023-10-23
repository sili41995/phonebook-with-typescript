import { ChangeEvent, ReactElement, ReactNode } from 'react';
import { IconBtnType } from 'constants/iconBtnType';
import { FormType } from 'constants/formType';

export interface IProps {
  value?: string;
  defaultValue?: string;
  fieldIcon?: ReactElement;
  settings?: object;
  inputWrap: boolean;
  btnType?: IconBtnType;
  children?: ReactNode;
  right?: number;
  position?: string;
  type?: string;
  placeholder?: string;
  autoFocus?: boolean;
  fieldIconSize?: number;
  inputType?: FormType;
  action?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  fieldIconSize?: number;
  inputType?: FormType;
}
