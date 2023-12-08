import { ISignUpCredentials } from 'types/types';

const getUserData = (data: ISignUpCredentials): ISignUpCredentials => {
  const entries = Object.entries(data);
  const userEntries = entries.filter((entry) =>
    entry[1] !== '' ? entry : false
  );

  return Object.fromEntries(userEntries) as ISignUpCredentials;
};

export default getUserData;
