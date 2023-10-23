import { FormType } from 'constants/formType';
import theme from 'constants/theme';

const setInputBorderColor = (inputType: FormType | undefined) => {
  switch (inputType) {
    case FormType.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.borderColor;
  }
};

export default setInputBorderColor;
