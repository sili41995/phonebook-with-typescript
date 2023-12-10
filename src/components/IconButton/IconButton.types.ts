import { BtnType, IconBtnType, Positions } from 'constants/index';
import { MouseEvent, ReactNode } from 'react';

export interface IProps {
  icon: ReactNode;
  onBtnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  // iconSize?: number;
  type?: BtnType;
  btnType: IconBtnType;
  position: Positions;
  top: number | 'center';
  right: number;
  width: number;
  height: number;
  inputWrap?: boolean;
  disabled?: boolean;
}

export interface IStyledProps {
  position: Positions;
  top: number | 'center';
  right: number;
  width: number;
  height: number;
  inputWrap?: boolean;
  // iconSize?: number;
  btnType: IconBtnType;
}
