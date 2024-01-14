import styled from '@emotion/styled';

export const ContactTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ContactName = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Jua;
  font-size: ${({ theme }) => `${theme.fontSize.secondaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  text-align: center;
  word-break: normal;
`;

export const ContactDesc = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: center;
  word-break: normal;
`;

export const NavBar = styled.nav`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightgreyColor};
  padding: ${({ theme }) => theme.spacing()};
  border-radius: ${({ theme }) => `${theme.borderRadius.navBarBorderRadius}px`};
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  & a {
    display: block;
    padding: ${({ theme }) => `${theme.spacing()} ${theme.spacing(5)}`};
    border-radius: ${({ theme }) =>
      `${theme.borderRadius.secondaryBorderRadius}px`};
    color: ${({ theme }) => theme.colors.otherFontColor};
    font-family: Jua;
    font-size: ${({ theme }) => `${theme.fontSize.primaryFontSize}px`};
    font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
    transition: background-color
      ${({ theme }) => theme.transitionDurationAndFunc};
    &.active,
    &:hover,
    &:focus {
      background-color: ${({ theme }) => theme.colors.otherLinkColor};
    }
  }
`;
