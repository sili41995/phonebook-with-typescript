import { BtnType } from 'constants/index';
import { Button } from './IconButton.styled';
import { IProps } from './IconButton.types';

const IconButton = ({
  icon,
  onBtnClick,
  type = BtnType.button,
  ...props
}: IProps) => (
  <Button type={type} onClick={onBtnClick} {...props}>
    {icon}
  </Button>
);

export default IconButton;
