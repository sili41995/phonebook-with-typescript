import { FormType } from 'constants/formType';
import theme from 'constants/theme';

const setInputBorderRadius = (inputType: FormType | undefined) => {
  switch (inputType) {
    case FormType.filter:
      return theme.borderRadius.primaryBorderRadius;

    default:
      return theme.borderRadius.secondaryBorderRadius;
  }
};

export default setInputBorderRadius;
