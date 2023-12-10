import styled from '@emotion/styled';

export const Container = styled.div`
  width: 650px;
  /* flex-shrink: 0; */
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
`;
