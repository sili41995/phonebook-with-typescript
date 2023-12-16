import { FormTypes, theme } from 'constants/index';

const setModalFormMargin = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.authForm:
      return `${theme.spacing(10)} auto`;

    default:
      return '';
  }
};

export default setModalFormMargin;
