import { FormTypes, theme } from 'constants/index';

const setInputBorderRadius = (formType: FormTypes | undefined) => {
  switch (formType) {
    case FormTypes.filter:
      return theme.borderRadius.primaryBorderRadius;

    default:
      return theme.borderRadius.secondaryBorderRadius;
  }
};

export default setInputBorderRadius;
