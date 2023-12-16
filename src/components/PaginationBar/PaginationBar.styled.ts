import styled from '@emotion/styled';
import { IStyledProps } from './PaginationBar.types';
import { setBtnDisplayProp } from 'utils';

export const List = styled.ul``;

export const Item = styled.li``;

export const TemplateItem = styled.li`
  & button {
    &:hover,
    &:focus {
    }
  }
`;

export const Button = styled.button`
  &.active {
  }
  &:hover,
  &:focus,
  &:active {
  }
`;
