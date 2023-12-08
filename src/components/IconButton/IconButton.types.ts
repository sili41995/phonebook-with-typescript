import { MouseEvent, ReactNode } from 'react';
import IconBtnType from 'constants/iconBtnType';
import Positions from 'constants/positions';
import BtnType from 'constants/btnType';

export interface IProps {
  children: ReactNode;
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
  // disabled?: boolean;
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
