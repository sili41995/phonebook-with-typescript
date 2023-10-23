import { DefaultValues } from 'constants/defaultValues';
import { IContact } from 'types/types';
import { getAvatar } from 'utils';

const getContactInfo = (contact: IContact): IContact => {
  const {
    id,
    name,
    number,
    avatar,
    role = DefaultValues.role,
    email = DefaultValues.email,
    chat = DefaultValues.chat,
    description = DefaultValues.description,
  } = contact;
  const userAvatar = getAvatar.getContactAvatar(avatar);

  return { userAvatar, name, id, role, number, email, chat, description };
};

export default getContactInfo;
