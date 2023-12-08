import { ChangeEvent, ReactElement, ReactNode } from 'react';
// import { IconBtnType } from 'constants/iconBtnType';
import { FormTypes } from 'constants/formTypes';
import { InputTypes } from 'constants/inputTypes';

export interface IProps {
  settings: object;
  type: InputTypes;
  placeholder: string;
  icon: ReactElement;
  formType: FormTypes;
  inputWrap: boolean;
  autoFocus?: boolean;
  // value?: string;
  // defaultValue?: string;
  // btnType?: IconBtnType;
  // children?: ReactNode;
  // right?: number;
  // position?: string;
  // fieldIconSize?: number;
  // inputType?: FormType;
  // action?: () => void;
  // onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  // fieldIconSize?: number;
  formType: FormTypes;
}
