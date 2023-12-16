import styled from '@emotion/styled';

export const InputWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxTitle = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;
