import { DefaultValues } from 'constants/defaultValues';
import { IUser } from 'types/types';
import { getAvatar } from 'utils';

const getUserInfo = (user: IUser) => {
  const {
    name,
    lastName,
    email,
    avatar,
    dateOfBirth = DefaultValues.dateOfBirth,
    phoneNumber = DefaultValues.phoneNumber,
    location = DefaultValues.location,
  } = user;
  const userName = lastName ? `${name} ${lastName}` : `${name}`;
  const userAvatar = getAvatar.getUserAvatar(avatar as string);

  return {
    name,
    userAvatar,
    userName,
    email,
    dateOfBirth,
    phoneNumber,
    location,
  };
};

export default getUserInfo;
