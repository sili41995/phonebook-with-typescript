import styled from '@emotion/styled';

export const Item = styled.li`
  position: relative;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.secondaryBorderRadius}px;
  border: 0.5px solid;
  border-color: ${({ theme }) => theme.colors.borderColor};
  transition: box-shadow ${({ theme }) => theme.transitionDurationAndFunc};
  &:hover,
  &:focus {
    box-shadow: ${({ theme }) => theme.shadows.primaryShadow};
  }
  & a {
    padding: ${({ theme }) => theme.spacing(3)};
    display: flex;
    gap: ${({ theme }) => theme.primaryGap}px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primaryFontColor};
  }
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

export const ContactInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  & div,
  & p {
    width: 165px;
    ${({ theme }) => theme.trimText}
  }
`;

export const Person = styled.div``;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.otherFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  text-align: center;
  /* ${({ theme }) => theme.trimText} */
  overflow: hidden;
`;

export const Role = styled.p`
  color: ${({ theme }) => theme.colors.contactPrimaryTextColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: center;
`;

export const Phone = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: center;
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.colors.contactSecondaryTextColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.secondaryFontWeight};
  text-align: center;
`;
