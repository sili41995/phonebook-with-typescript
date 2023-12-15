import { MouseEvent } from 'react';
import { IContact } from 'types/types';

export interface IProps {
  contact: IContact;
  setContact: (data: IContact) => void;
  onEditBtnClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
