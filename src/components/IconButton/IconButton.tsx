import { BtnType } from 'constants/index';
import { Button } from './IconButton.styled';
import { IProps } from './IconButton.types';

const IconButton = ({
  icon,
  onBtnClick,
  title,
  type = BtnType.button,
  ...props
}: IProps) => (
  <Button type={type} onClick={onBtnClick} {...props}>
    {title ? (
      <>
        {icon}
        {title}
      </>
    ) : (
      icon
    )}
  </Button>
);

export default IconButton;
