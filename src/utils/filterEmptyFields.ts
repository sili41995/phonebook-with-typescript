import { ProfileEntry } from 'types/types';

const filterEmptyFields = <T>(data: T): T => {
  const entries: ProfileEntry[] = Object.entries(data as Object);
  const filteredEntries = entries.map((entry) =>
    entry[1] === '' ? [entry[0], undefined] : entry
  );

  return Object.fromEntries(filteredEntries);
};

export default filterEmptyFields;
