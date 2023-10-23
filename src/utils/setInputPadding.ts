import { FormType } from 'constants/formType';
import theme from 'constants/theme';

const setInputPadding = (inputType: FormType | undefined) => {
  switch (inputType) {
    case FormType.filter:
      return `
      ${theme.spacing(2)}
      ${theme.spacing(10)}
      ${theme.spacing(2)}
      ${theme.spacing(4)}`;

    case FormType.authForm:
      return `
      ${theme.spacing(2)}
      ${theme.spacing(10)}
      ${theme.spacing(2)}`;

    default:
      return `
      ${theme.spacing(2)}
      ${theme.spacing(2)}
      ${theme.spacing(2)}
      ${theme.spacing(10)}`;
  }
};

export default setInputPadding;
