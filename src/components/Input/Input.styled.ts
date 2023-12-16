import styled from '@emotion/styled';
import { FormTypes } from 'constants/index';
import {
  setInputMaxWidth,
  setInputHeight,
  setInputBorderColor,
  setInputFilter,
  setInputBorderRadius,
  setInputPadding,
  setInputFontColor,
  setInputFontSize,
} from 'utils';
import { IStyledProps } from './Input.types';

export const Container = styled.div`
  & > svg {
  }
`;

export const StyledInput = styled.input`
  &:focus {
  }
  &:focus + svg {
  }
`;

export const Label = styled.label`
  & input {
  }
  &:has([type='checkbox']) svg {
    &:hover,
    &:focus {
    }
  }
`;
