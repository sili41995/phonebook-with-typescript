import { PagePaths } from 'constants/index';

const { signInPath, signUpPath, homePath } = PagePaths;

const getIsAuthPage = (path: string): boolean =>
  [homePath, `/${signInPath}`, `/${signUpPath}`].includes(path);

export default getIsAuthPage;
