import theme from 'constants/theme';
import { getIsAuthPage } from 'utils';

const setAuthPageBackgroundColor = (path: string): void => {
  const isAuthPage = getIsAuthPage(path);

  document.body.style.backgroundColor = isAuthPage
    ? theme.colors.authPageBackgroundColor
    : theme.colors.whiteColor;
};

export default setAuthPageBackgroundColor;
