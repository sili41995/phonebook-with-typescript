import { PagePaths } from 'constants/index';

const getIsContactsPage = (path: string): boolean =>
  path.includes(PagePaths.contactsPath);

export default getIsContactsPage;
