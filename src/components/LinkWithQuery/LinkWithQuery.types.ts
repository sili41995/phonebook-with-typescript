import { ReactNode } from 'react';

export interface IProps {
  children: ReactNode;
  to: string;
  state?: object;
}
