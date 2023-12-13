import { FormTypes, theme } from 'constants/index';

const setInputFontColor = (formType: FormTypes | undefined) => {
  switch (formType) {
    case FormTypes.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.primaryFontColor;
  }
};

export default setInputFontColor;
