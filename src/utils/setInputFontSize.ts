import FormTypes from 'constants/formTypes';
import theme from 'constants/theme';

const setInputFontSize = (formType: FormTypes) => {
  switch (formType) {
    case FormTypes.authForm:
      return theme.fontSize.otherFontSize;

    default:
      return theme.fontSize.secondaryFontSize;
  }
};

export default setInputFontSize;
