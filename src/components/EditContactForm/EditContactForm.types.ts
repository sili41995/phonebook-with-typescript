import { MouseEvent } from 'react';
import { IContact } from 'types/types';

export interface IProps {
  contact: IContact;
  onEditBtnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
