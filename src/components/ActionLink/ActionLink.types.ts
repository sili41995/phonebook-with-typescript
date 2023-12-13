import { ReactNode } from 'react';
import { IconBtnType } from 'constants/index';

export interface IProps {
  link: string;
  icon: ReactNode;
  btnType: IconBtnType;
}

export interface IStyledProps {
  btnType: IconBtnType;
}
