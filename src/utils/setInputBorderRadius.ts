import FormTypes from 'constants/formTypes';
import theme from 'constants/theme';

const setInputBorderRadius = (formType: FormTypes) => {
  switch (formType) {
    case FormTypes.filter:
      return theme.borderRadius.primaryBorderRadius;

    default:
      return theme.borderRadius.secondaryBorderRadius;
  }
};

export default setInputBorderRadius;
