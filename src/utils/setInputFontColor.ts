import FormTypes from 'constants/formTypes';
import theme from 'constants/theme';

const setInputFontColor = (formType: FormTypes) => {
  switch (formType) {
    case FormTypes.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.primaryFontColor;
  }
};

export default setInputFontColor;
