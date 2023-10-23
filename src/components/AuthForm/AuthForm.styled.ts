import styled from '@emotion/styled';

export const FormContainer = styled.div`
  width: 600px;
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.authFormBackgroundColor};
  padding: ${({ theme }) => theme.padding.paddingAuthForm}px;
  margin: ${({ theme }) => theme.spacing(10)} auto;
  border-radius: ${({ theme }) => theme.borderRadius.otherBorderRadius}px;
  box-shadow: ${({ theme }) => theme.shadows.secondaryShadow};
`;
