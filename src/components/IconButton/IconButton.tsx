import BtnType from 'constants/btnType';
import { Button } from './IconButton.styled';
import { IProps } from './IconButton.types';

const IconButton = ({
  children,
  onBtnClick,
  type = BtnType.button,
  ...props
}: IProps) => (
  <Button type={type} onClick={onBtnClick} {...props}>
    {children}
  </Button>
);

export default IconButton;
