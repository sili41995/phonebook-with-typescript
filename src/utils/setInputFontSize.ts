import { FormType } from 'constants/formType';
import theme from 'constants/theme';

const setInputFontSize = (inputType: FormType | undefined) => {
  switch (inputType) {
    case FormType.authForm:
      return theme.fontSize.otherFontSize;

    default:
      return theme.fontSize.secondaryFontSize;
  }
};

export default setInputFontSize;
