import { FormTypes, theme } from 'constants/index';

const setModalFormBackgroundColor = (
  formType: FormTypes | undefined
): string => {
  switch (formType) {
    case FormTypes.authForm:
      return theme.colors.authFormBackgroundColor;

    default:
      return 'transparent';
  }
};

export default setModalFormBackgroundColor;
