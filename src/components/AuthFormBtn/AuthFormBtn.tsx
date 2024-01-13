import { FC } from 'react';
import Loader from 'components/Loader';
import { IProps } from './AuthFormBtn.types';
import { AriaLabels, BtnType } from 'constants/index';
import { Button } from './AuthFormBtn.styled';

const AuthFormBtn: FC<IProps> = ({ title, disabled = false }) => (
  <Button
    disabled={disabled}
    type={BtnType.submit}
    aria-label={AriaLabels.authBtn}
  >
    {disabled ? <Loader /> : title}
  </Button>
);

export default AuthFormBtn;
