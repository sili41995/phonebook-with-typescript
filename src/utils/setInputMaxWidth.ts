import { FormType } from 'constants/formType';

const setInputMaxWidth = (inputType: FormType | undefined) => {
  switch (inputType) {
    case FormType.filter:
      return '200px';

    default:
      return false;
  }
};

export default setInputMaxWidth;
