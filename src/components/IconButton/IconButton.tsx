import { BtnType } from 'constants/index';
import { Button } from './IconButton.styled';
import { IProps } from './IconButton.types';

const IconButton = ({
  icon,
  onBtnClick,
  title,
  type = BtnType.button,
  width = 44,
  height = 36,
  top = 0,
  right = 0,
  ...props
}: IProps) => (
  <Button
    type={type}
    right={right}
    top={top}
    width={width}
    height={height}
    onClick={onBtnClick}
    {...props}
  >
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
