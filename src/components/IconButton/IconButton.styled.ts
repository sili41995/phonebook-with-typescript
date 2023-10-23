import styled from '@emotion/styled';
import { setButtonColor, setIconFill, setIconHoverEffect } from 'utils';
import { IStyledProps } from './IconButton.types';

export const Button = styled.button`
  position: ${({ position }: IStyledProps) => position};
  top: ${({ top }) => top && (top === 'center' ? '50%' : `${top}px`)};
  right: ${({ right }) => right}px;
  transform: translateY(${({ top }) => (top === 'center' ? '-50%' : false)});
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.primaryGap}px;
  min-width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  padding: ${({ theme }) => theme.spacing()};
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
  border-color: transparent;
  background-color: ${({ btnType }) => setButtonColor(btnType)};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-decoration: none;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  z-index: 10;
  &:hover,
  &:focus {
    box-shadow: ${({ theme, inputWrap }) =>
      !inputWrap && theme.shadows.primaryShadow};
  }
  & svg {
    width: ${({ iconSize }: IStyledProps) =>
      iconSize ? `${iconSize}px` : '100%'};
    height: ${({ iconSize }: IStyledProps) =>
      iconSize ? `${iconSize}px` : '100%'};
    color: ${({ btnType }) => setIconFill(btnType)};
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
  }
  & svg:hover,
  & svg:focus {
    color: ${({ btnType, inputWrap }: IStyledProps) =>
      inputWrap && setIconHoverEffect(btnType)};
  }
`;
