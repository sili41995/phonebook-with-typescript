import { FC } from 'react';
import { useAppSelector } from 'hooks/redux';
import { selectIsLoading } from 'redux/auth/selectors';
import Loader from 'components/Loader';
import { IProps } from './AuthFormBtn.types';
import { BtnType } from 'constants/index';
import { Button } from './AuthFormBtn.styled';

const AuthFormBtn: FC<IProps> = ({ title }) => {
  const isLoading = useAppSelector(selectIsLoading);

  return (
    <Button disabled={isLoading} type={BtnType.submit}>
      {isLoading ? <Loader /> : title}
    </Button>
  );
};

export default AuthFormBtn;
