import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './NavigationBar.styled';
import PrivateLinks from 'components/PrivateLinks';
import PublicLinks from 'components/PublicLinks';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useAppSelector } from 'hooks/redux';
import { PagesPath } from 'constants/pagesPath';

const NavigationBar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const contactsPagePath = `/${PagesPath.contactsPath}`;
  const aboutPagePath = `/${PagesPath.aboutPath}`;

  return (
    <NavContainer>
      <List>
        <ListItem>
          <NavLink to={contactsPagePath}>Contacts</NavLink>
        </ListItem>
        <ListItem>
          <NavLink to={aboutPagePath}>About</NavLink>
        </ListItem>
      </List>
      {isLoggedIn ? <PrivateLinks /> : <PublicLinks />}
    </NavContainer>
  );
};

export default NavigationBar;
