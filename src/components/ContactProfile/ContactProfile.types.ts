import { Dispatch, SetStateAction } from 'react';
import { IContact } from 'types/types';

export interface IProps {
  contact: IContact;
  editContact: boolean;
  setEditContact: Dispatch<SetStateAction<boolean>>;
}
