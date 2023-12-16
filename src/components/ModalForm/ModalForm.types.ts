import { ReactNode } from 'react';
import { FormTypes } from 'constants/index';

export interface IProps {
  children: ReactNode;
  formType?: FormTypes;
}

export interface IStyledProps {
  formType?: FormTypes;
}
