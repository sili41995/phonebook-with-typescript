import { FormTypes } from 'constants/formTypes';

const setInputHeight = (formType: FormTypes) => {
  switch (formType) {
    case FormTypes.filter:
      return '100%';

    case FormTypes.authForm:
      return '60px';

    default:
      return '50px';
  }
};

export default setInputHeight;
