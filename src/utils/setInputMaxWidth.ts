import { FormTypes } from 'constants/formTypes';

const setInputMaxWidth = (formType: FormTypes) => {
  switch (formType) {
    case FormTypes.filter:
      return '200px';

    default:
      return false;
  }
};

export default setInputMaxWidth;
