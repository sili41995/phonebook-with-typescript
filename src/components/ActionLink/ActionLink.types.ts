import { ReactNode } from 'react';
import { IconBtnType } from 'constants/iconBtnType';

export interface IProps {
  link: string;
  children: ReactNode;
  btnType: IconBtnType;
}

export interface IStyledProps {
  btnType: IconBtnType;
}
