import { ProfileEntry } from 'types/types';

const filterEmptyFields = <T>(data: T): T => {
  const entries: ProfileEntry[] = Object.entries(data as Object);
  const filteredEntries = entries.filter((entry) => entry[1]);

  return Object.fromEntries(filteredEntries) as T;
};

export default filterEmptyFields;
