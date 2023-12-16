import { FormTypes, theme } from 'constants/index';

const setInputBorderColor = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.borderColor;
  }
};

export default setInputBorderColor;
