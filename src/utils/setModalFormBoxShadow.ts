import { FormTypes, theme } from 'constants/index';

const setModalFormBoxShadow = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.authForm:
      return theme.shadows.secondaryShadow;

    default:
      return '';
  }
};

export default setModalFormBoxShadow;
