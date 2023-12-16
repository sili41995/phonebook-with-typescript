import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(10)};
`;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Info = styled.div`
  width: 180px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  ${({ theme }) => theme.trimText}
`;
