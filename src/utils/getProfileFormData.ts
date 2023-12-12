import { IProfile } from 'types/types';

const getProfileFormData = (profile: IProfile): FormData => {
  const formData = new FormData();

  if (profile.avatar && profile.avatar.length) {
    formData.append('avatar', profile.avatar[0]);
  }

  const keys = Object.keys(profile);

  keys.forEach((key) => {
    if (key !== 'avatar' && profile[key] !== undefined) {
      formData.append(key, String(profile[key]));
    }
  });

  return formData;
};

export default getProfileFormData;
