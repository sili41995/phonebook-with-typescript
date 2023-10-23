import defaultUserAvatar from 'components/default-user-avatar.jpg';
import defaultContactAvatar from 'components/default-contact-avatar.jpg';

const getUserAvatar = (avatar: string | undefined): string =>
  avatar ? avatar : defaultUserAvatar;

const getContactAvatar = (avatar: string | undefined): string =>
  avatar ? avatar : defaultContactAvatar;

const getAvatar = { getUserAvatar, getContactAvatar };

export default getAvatar;
