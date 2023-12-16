import { FormTypes, theme } from 'constants/index';

const setInputHoverEffect = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.filter:
      return '';

    default:
      return theme.colors.primaryColor;
  }
};

export default setInputHoverEffect;
