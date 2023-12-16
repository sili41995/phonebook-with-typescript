import styled from '@emotion/styled';

export const Form = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  & label svg {
    &:hover,
    &:focus {
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing()};
`;

// export const Form = styled.form`

//   & label svg {
//     color: ${({ theme }) => theme.colors.greyColor};
//     transition: color ${({ theme }) => theme.transitionDurationAndFunc};
//     cursor: pointer;
//     &:hover,
//     &:focus {
//       color: ${({ theme }) => theme.colors.blueIconColor};
//     }
//   }
// `;

// export const ButtonsContainer = styled.div`

// `;
