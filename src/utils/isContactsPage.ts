import { PagesPath } from 'constants/pagesPath';

const isContactsPage = (path: string): boolean =>
  path.includes(PagesPath.contactsPath);

export default isContactsPage;
