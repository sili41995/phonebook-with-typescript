import { FC } from 'react';
import { Container, Label, StyledInput } from './Input.styled';
import IconButton from 'components/IconButton';
import { IProps } from './Input.types';
import { Positions, InputTypes } from 'constants/index';

const Input: FC<IProps> = ({
  settings,
  inputWrap,
  action,
  btnIcon,
  btnType,
  type,
  icon,
  altElem,
  checked,
  ...otherProps
}) => {
  const input = (
    <StyledInput type={type} checked={checked} {...settings} {...otherProps} />
  );

  if (type === InputTypes.file || type === InputTypes.checkbox) {
    return (
      <Label checked={checked}>
        {altElem}
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
