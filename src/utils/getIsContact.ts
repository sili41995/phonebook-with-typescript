import { IContact } from 'types/types';

interface IFuncProps {
  newContactName: string;
  contacts: IContact[];
}

const getIsContact = ({ newContactName, contacts }: IFuncProps) =>
  contacts.some(({ name }) => name === newContactName);

export default getIsContact;
