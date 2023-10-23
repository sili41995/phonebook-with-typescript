import { MouseEvent, ReactNode } from 'react';
import { IconBtnType } from 'constants/iconBtnType';
import { BtnType } from 'constants/btnType';

export interface IProps {
  iconSize?: number;
  children: ReactNode;
  type?: BtnType;
  btnType: IconBtnType;
  position?: string;
  top?: number | 'center';
  right?: number;
  width: number;
  height?: number;
  inputWrap?: boolean;
  disabled?: boolean;
  onBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface IStyledProps {
  position?: string;
  top?: number | 'center';
  right?: number;
  width?: number;
  height?: number;
  inputWrap?: boolean;
  iconSize?: number;
  btnType: IconBtnType;
}
