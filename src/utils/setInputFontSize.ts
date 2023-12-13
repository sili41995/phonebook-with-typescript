import { FormTypes, theme } from 'constants/index';

const setInputFontSize = (formType: FormTypes | undefined) => {
  switch (formType) {
    case FormTypes.authForm:
      return theme.fontSize.otherFontSize;

    default:
      return theme.fontSize.secondaryFontSize;
  }
};

export default setInputFontSize;
