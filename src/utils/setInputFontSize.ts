import { FormTypes, theme } from 'constants/index';

const setInputFontSize = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.authForm:
      return `${theme.fontSize.otherFontSize}px`;

    default:
      return `${theme.fontSize.secondaryFontSize}px`;
  }
};

export default setInputFontSize;
