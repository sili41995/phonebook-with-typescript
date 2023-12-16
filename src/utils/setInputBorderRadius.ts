import { FormTypes, theme } from 'constants/index';

const setInputBorderRadius = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.filter:
      return `${theme.borderRadius.primaryBorderRadius}px`;

    default:
      return `${theme.borderRadius.secondaryBorderRadius}px`;
  }
};

export default setInputBorderRadius;
