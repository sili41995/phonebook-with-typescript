import { FormTypes } from 'constants/index';

const setModalFormWidth = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.authForm:
      return '600px';

    default:
      return '100%';
  }
};

export default setModalFormWidth;
