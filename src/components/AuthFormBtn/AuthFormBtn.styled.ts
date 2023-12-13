import styled from '@emotion/styled';

export const Button = styled.button`
  display: block;
  min-width: 170px;
  height: 60px;
  padding-left: ${({ theme }) => theme.spacing(8)};
  padding-right: ${({ theme }) => theme.spacing(8)};
  align-self: center;
  background-color: ${({ theme }) => theme.colors.primaryColor};
  border-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.primaryBorderRadius}px;
  color: #fff;
  text-align: center;
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  line-height: 1.5;
  letter-spacing: 0.64px;
  transition: background-color ${({ theme }) => theme.transitionDurationAndFunc};
  & svg {
    height: 40px;
    fill: ${({ theme }) => theme.colors.whiteColor};
  }
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
