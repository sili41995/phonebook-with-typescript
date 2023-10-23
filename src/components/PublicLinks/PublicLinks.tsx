import { NavLink } from 'react-router-dom';
import { List, ListItem } from './PublicLinks.styled';
import { PagesPath } from 'constants/pagesPath';

const PublicLinks = () => {
  const registerPagePath = `/${PagesPath.registerPath}`;
  const loginPagePath = `/${PagesPath.loginPath}`;

  return (
    <List>
      <ListItem>
        <NavLink to={registerPagePath}>Sign up</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={loginPagePath}>Log in</NavLink>
      </ListItem>
    </List>
  );
};

export default PublicLinks;
