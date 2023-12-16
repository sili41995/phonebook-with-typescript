import styled from '@emotion/styled';
import { IStyledProps } from './SharedLayout.types';

export const Header = styled.header`
  display: inline-block;
  min-width: 100%;
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  background-color: ${({ theme }) => theme.colors.otherColor};
`;

export const Container = styled.div`
  width: 1200px;
  display: ${({ isContactsPage }: IStyledProps) =>
    isContactsPage ? 'flex' : 'block'};
  gap: ${({ isContactsPage, theme }) =>
    isContactsPage ? theme.primaryGap : 0}px;
  padding-left: ${({ theme }) => theme.padding.paddingContainer}px;
  padding-right: ${({ theme }) => theme.padding.paddingContainer}px;
  margin-left: auto;
  margin-right: auto;
`;

export const Main = styled.main``;

export const Section = styled.section`
  padding-top: ${({ theme }) => theme.padding.paddingContainer}px;
  padding-bottom: ${({ theme }) => theme.padding.paddingContainer}px;
`;
