import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  width: 650px;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.primaryGap}px;
`;
