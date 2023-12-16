import { FormTypes, theme } from 'constants/index';

const setModalFormPadding = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.authForm:
      return `${theme.padding.paddingAuthForm}px`;

    default:
      return '';
  }
};

export default setModalFormPadding;
