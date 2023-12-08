import { FormTypes } from 'constants/formTypes';
import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  formType: FormTypes;
}

export interface IStyledProps {
  formType: FormTypes;
}
