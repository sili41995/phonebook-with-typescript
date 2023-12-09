import { FC } from 'react';
import { Container, StyledInput } from './Input.styled';
import IconButton from 'components/IconButton';
import { IProps } from './Input.types';
import Positions from 'constants/positions';
import InputTypes from 'constants/inputTypes';
import image from 'images/default-signup-avatar.png';

const Input: FC<IProps> = ({
  settings,
  inputWrap,
  action,
  btnIcon,
  btnType,
  type,
  imageRef,
  ...otherProps
}) => {
  const input = <StyledInput type={type} {...settings} {...otherProps} />;

  if (type === InputTypes.file) {
    return (
      <label>
        <img src={image} alt="asd" ref={imageRef} />
        {input}
      </label>
    );
  }

  const inputWithWrap = (
    <Container>
      {input}
      {btnType && (
        <IconButton
          onBtnClick={action}
          btnType={btnType}
          position={Positions.absolute}
          top="center"
          right={0}
          height={35}
          width={44}
          inputWrap
        >
          {btnIcon}
        </IconButton>
      )}
    </Container>
  );

  return inputWrap ? inputWithWrap : input;
};

// const Input = forwardRef<HTMLInputElement, IProps>(
//   (
//     {
//       inputWrap,
//       btnType,
//       children,
//       action,
//
//       ...props
//     },
//     ref
//   ) => {
//     const input = <StyledInput ref={ref} {...settings} {...props} />;
//     const inputWithWrap = (
//       <Container {...props}>
//         {input}
//         {fieldIcon}
//         {btnType && (
//           <IconButton
//             position="absolute"
//
//             right={right}
//             btnType={btnType}
//
//
//             onBtnClick={action}
//             inputWrap
//           >
//             {children}
//           </IconButton>
//         )}
//       </Container>
//     );

//     ;
//   }
// );

export default Input;
