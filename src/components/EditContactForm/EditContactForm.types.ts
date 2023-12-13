import { Dispatch, SetStateAction } from 'react';
import { IContact } from 'types/types';

export interface IProps {
  contact: IContact;
  setEditContact: Dispatch<SetStateAction<boolean>>;
}
