import { IContact } from 'types/types';

interface IFuncProps {
  newContactName: string;
  contacts: IContact[];
}

const getIsContact = ({ newContactName, contacts }: IFuncProps): boolean =>
  contacts.some(({ name }) => name === newContactName);

export default getIsContact;
