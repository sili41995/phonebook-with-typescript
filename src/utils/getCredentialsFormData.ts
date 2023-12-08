import { ISignUpCredentials } from 'types/types';

const getCredentialsFormData = (userData: ISignUpCredentials): FormData => {
  const formData = new FormData();

  if (userData.avatar.length) {
    formData.append('avatar', userData.avatar[0]);
  }

  const keys = Object.keys(userData);

  keys.forEach((key) => {
    if (key !== 'avatar' && userData[key] !== undefined) {
      formData.append(key, String(userData[key]));
    }
  });

  return formData;
};

export default getCredentialsFormData;
