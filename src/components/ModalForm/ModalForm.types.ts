import { FormTypes } from 'constants/index';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  formType?: FormTypes;
}

export interface IStyledProps {
  formType?: FormTypes;
}
