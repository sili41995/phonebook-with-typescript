import { PagesPath } from 'constants/pagesPath';

const getAuthPages = () => {
  const { homePath, registerPath, loginPath } = PagesPath;

  return [homePath, `/${registerPath}`, `/${loginPath}`];
};

export default getAuthPages;
