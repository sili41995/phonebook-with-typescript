import { ChangeEvent, ReactElement, RefObject } from 'react';
import { FormTypes, InputTypes, IconBtnType } from 'constants/index';

export interface IProps {
  settings?: object;
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
  value?: string;
  defaultValue?: string;
  action?: () => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IStyledProps {
  formType?: FormTypes;
}
