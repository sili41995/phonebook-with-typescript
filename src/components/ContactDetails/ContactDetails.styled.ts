import styled from '@emotion/styled';

export const Container = styled.div`
  flex-grow: 1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

export const ManipulationButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
`;
