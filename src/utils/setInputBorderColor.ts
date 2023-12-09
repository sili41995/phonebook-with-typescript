import FormTypes from 'constants/formTypes';
import theme from 'constants/theme';

const setInputBorderColor = (formType: FormTypes | undefined) => {
  switch (formType) {
    case FormTypes.filter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.borderColor;
  }
};

export default setInputBorderColor;
