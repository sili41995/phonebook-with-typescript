import { FormType } from 'constants/formType';

const setInputFilter = (inputType: FormType | undefined) => {
  switch (inputType) {
    case FormType.filter:
      return 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15))';

    default:
      return;
  }
};

export default setInputFilter;
