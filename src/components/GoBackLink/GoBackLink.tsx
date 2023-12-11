import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { StyledLink } from './GoBackLink.styled';
import { PagePaths } from 'constants/index';
import { IProps } from './GoBackLink.types';

const GoBackLink: FC<IProps> = ({ title = 'Go Back' }) => {
  const { search } = useLocation();

  return (
    <StyledLink to={`/${PagePaths.contactsPath}${search}`}>{title}</StyledLink>
  );
};

export default GoBackLink;
