import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { IStyledProps } from './GoBackLink.types';

export const StyledLink = styled(Link)<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  padding: ${({ theme }) => theme.spacing()};
  background-color: ${({ theme }) => theme.colors.btnBackgroundColor};
  border-radius: ${({ theme }) =>
    `${theme.borderRadius.secondaryBorderRadius}px`};
  border-color: transparent;
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
`;
