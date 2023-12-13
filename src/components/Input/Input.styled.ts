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
  position: relative;
  & > svg {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    display: block;
    color: ${({ theme }) => theme.colors.greyColor};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  max-width: ${({ formType }: IStyledProps) => setInputMaxWidth(formType)};
  height: ${({ formType }) => setInputHeight(formType)};
  background-color: transparent;
  border: 1px solid ${({ formType }) => setInputBorderColor(formType)};
  filter: ${({ formType }) => setInputFilter(formType)};
  border-radius: ${({ formType }) => setInputBorderRadius(formType)}px;
  padding: ${({ formType }) => setInputPadding(formType)};
  font-family: Inter;
  color: ${({ formType }) => setInputFontColor(formType)};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  font-size: ${({ formType }) => setInputFontSize(formType)}px;
  letter-spacing: 0.04em;
  transition: border-color ${({ theme }) => theme.transitionDurationAndFunc};
  &:focus {
    outline: none;
    border-color: ${({ theme, formType }) =>
      formType === FormTypes.filter ? false : theme.colors.primaryColor};
  }
  &:focus + svg {
    transition: color ${({ theme }) => theme.transitionDurationAndFunc};
    color: ${({ theme }) => theme.colors.primaryColor};
  }
`;

export const Label = styled.label`
  margin-left: auto;
  margin-right: auto;
  & input {
    position: fixed;
    transform: scale(0);
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  cursor: pointer;
`;
