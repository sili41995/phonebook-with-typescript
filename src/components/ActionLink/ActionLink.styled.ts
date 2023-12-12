import styled from '@emotion/styled';
import { setButtonColor, setIconFill } from 'utils';
import { IStyledProps } from './ActionLink.types';

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 35px;
  background-color: ${({ btnType }: IStyledProps) => setButtonColor(btnType)};
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
  & svg {
    color: ${({ btnType }) => setIconFill(btnType)};
  }
`;
