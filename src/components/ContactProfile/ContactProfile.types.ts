import { MouseEvent } from 'react';
import { IContact } from 'types/types';

export interface IProps {
  contact: IContact;
  editContact: boolean;
  onEditBtnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
