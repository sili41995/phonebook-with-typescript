import styled from '@emotion/styled';

export const Container = styled.div`
  flex-grow: 1;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* margin-bottom: ${({ theme }) => theme.spacing(28)}; */
`;

export const ManipulationButtons = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.primaryGap}px;
`;
