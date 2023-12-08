import styled from '@emotion/styled';
import { FormTypes } from 'constants/formTypes';
import { IStyledProps } from './ModalForm.types';

export const Container = styled.div`
  width: ${({ formType }: IStyledProps) =>
    formType === FormTypes.authForm ? '600px' : '100%'};
  padding: ${({ formType, theme }) =>
    formType === FormTypes.authForm
      ? `${theme.padding.paddingAuthForm}px`
      : 'auto'};
  background-color: ${({ formType, theme }) =>
    formType === FormTypes.authForm
      ? theme.colors.authFormBackgroundColor
      : 'transparent'};
  border-radius: ${({ formType, theme }) =>
    formType === FormTypes.authForm
      ? `${theme.borderRadius.otherBorderRadius}px`
      : false};
  box-shadow: ${({ formType, theme }) =>
    formType === FormTypes.authForm ? theme.shadows.secondaryShadow : 'none'};
  margin: ${({ formType, theme }) =>
    formType === FormTypes.authForm ? `${theme.spacing(10)} auto` : 'auto'};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
`;
