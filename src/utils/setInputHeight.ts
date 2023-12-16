import { FormTypes } from 'constants/index';

const setInputHeight = (formType: FormTypes | undefined): string => {
  switch (formType) {
    case FormTypes.filter:
      return '100%';

    case FormTypes.authForm:
      return '60px';

    default:
      return '44px';
  }
};

export default setInputHeight;
