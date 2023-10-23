import { getAuthPages } from 'utils';

const isAuthPage = (path: string): boolean => getAuthPages().includes(path);

export default isAuthPage;
