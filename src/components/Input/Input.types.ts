import { ChangeEvent, ReactElement, ReactNode, RefObject } from 'react';
// import { IconBtnType } from 'constants/iconBtnType';
import FormTypes from 'constants/formTypes';
import InputTypes from 'constants/inputTypes';
import IconBtnType from 'constants/iconBtnType';

export interface IProps {
  settings: object;
  type: InputTypes;
  placeholder?: string;
  icon?: ReactElement;
  formType?: FormTypes;
  inputWrap?: boolean;
  autoFocus?: boolean;
  btnType?: IconBtnType;
  btnIcon?: ReactElement | boolean;
  accept?: string;
  imageRef?: RefObject<HTMLImageElement>;
  // value?: string;
  // defaultValue?: string;
  // children?: ReactNode;
  // right?: number;
  // position?: string;
  // fieldIconSize?: number;
  // inputType?: FormType;
  action?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  // fieldIconSize?: number;
  formType?: FormTypes;
}
