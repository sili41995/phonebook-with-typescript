import styled from '@emotion/styled';

export const UserProfileContainer = styled.div`
  width: 250px;
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 30%;
  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Jua;
  font-size: ${({ theme }) => theme.fontSize.titleFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  ${({ theme }) => theme.trimText}
`;

export const UserData = styled.div`
  margin-top: ${({ theme }) => theme.spacing(7)};
  margin-bottom: ${({ theme }) => theme.spacing(16)};
`;

export const UserInfo = styled.div``;

export const FullName = styled.p`
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing()};
  color: ${({ theme }) => theme.colors.primaryFontColor};
  font-family: Jua;
  font-size: ${({ theme }) => theme.fontSize.subtitleFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.otherFontWeight};
  text-align: center;
  ${({ theme }) => theme.trimText}
`;

export const Email = styled.p`
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.secondaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  text-align: center;
  ${({ theme }) => theme.trimText}
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(3)};
  color: ${({ theme }) => theme.colors.secondaryFontColor};
  font-family: Inter;
  font-size: ${({ theme }) => theme.fontSize.primaryFontSize}px;
  font-weight: ${({ theme }) => theme.fontWeight.primaryFontWeight};
  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(6)};
  }
  & p {
    ${({ theme }) => theme.trimText}
  }
`;

export const ContactInfoIconWrap = styled.span`
  display: flex;
  align-items: center;
`;
