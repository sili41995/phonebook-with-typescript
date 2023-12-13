import { FC } from 'react';
import { Container, Image, Label, StyledInput } from './Input.styled';
import IconButton from 'components/IconButton';
import { IProps } from './Input.types';
import { Positions, InputTypes } from 'constants/index';
import image from 'images/default-signup-avatar.png';

const Input: FC<IProps> = ({
  settings,
  inputWrap,
  action,
  btnIcon,
  btnType,
  type,
  imageRef,
  icon,
  ...otherProps
}) => {
  const input = <StyledInput type={type} {...settings} {...otherProps} />;

  if (type === InputTypes.file) {
    return (
      <Label>
        <Image src={image} alt="user avatar" ref={imageRef} />
        {input}
      </Label>
    );
  }

  const inputWithWrap = (
    <Container>
      {input}
      {icon}
      {btnType && (
        <IconButton
          onBtnClick={action}
          btnType={btnType}
          position={Positions.absolute}
          top="center"
          right={0}
          height={35}
          width={44}
          icon={btnIcon}
          inputWrap
        />
      )}
    </Container>
  );

  return inputWrap ? inputWithWrap : input;
};

export default Input;
