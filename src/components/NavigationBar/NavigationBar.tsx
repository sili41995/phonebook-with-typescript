import { NavLink } from 'react-router-dom';
import { NavContainer, List, ListItem } from './NavigationBar.styled';
import PrivateLinks from 'components/PrivateLinks';
import PublicLinks from 'components/PublicLinks';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useAppSelector } from 'hooks/redux';
import { PagePaths } from 'constants/index';

const NavigationBar = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const contactsPagePath = `/${PagePaths.contactsPath}`;
  const aboutPagePath = `/${PagePaths.aboutPath}`;

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
