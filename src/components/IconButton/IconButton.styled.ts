import styled from '@emotion/styled';
import { setButtonColor, setIconFill, setIconHoverEffect } from 'utils';
import { IStyledProps } from './IconButton.types';

export const Button = styled.button`
  position: ${({ position }: IStyledProps) => position};
  top: ${({ top }) => (top === 'center' ? '50%' : `${top}px`)};
  right: ${({ right }) => `${right}px`};
  transform: translateY(${({ top }) => (top === 'center' ? '-50%' : '')});
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  padding: ${({ theme }) => theme.spacing()};
  background-color: ${({ btnType }) => setButtonColor(btnType)};
  border-color: transparent;
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.secondaryBorderRadius}px`};
  &:hover,
  &:focus {
    box-shadow: ${({ theme, inputWrap }) =>
      !inputWrap && theme.shadows.primaryShadow};
  }
  & svg {
    color: ${({ btnType }) => setIconFill(btnType)};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
  & svg:hover,
  & svg:focus {
    color: ${({ btnType, inputWrap }: IStyledProps) =>
      inputWrap && setIconHoverEffect(btnType)};
  }
`;

// export const Button = styled.button`
//   gap: ${({ theme }) => theme.primaryGap}px;
//   color: ${({ theme }) => theme.colors.primaryFontColor};
//   font-family: Inter;
//   font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
//   font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
//   text-decoration: none;
//   transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
//   z-index: 10;
// `;
