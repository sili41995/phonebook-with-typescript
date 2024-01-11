import styled from '@emotion/styled';

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => `${theme.fontSize.otherFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.spacing(10)};
  justify-content: center;
`;

export const Item = styled.li``;
