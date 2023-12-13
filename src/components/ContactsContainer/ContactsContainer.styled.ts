import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 650px;
  flex-direction: column;
  gap: ${({ theme }) => theme.primaryGap}px;
`;
