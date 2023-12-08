import { NavLink } from 'react-router-dom';
import { List, ListItem } from './PublicLinks.styled';
import PagesPath from 'constants/pagesPath';

const PublicLinks = () => {
  const signUpPagePath = `/${PagesPath.signUpPath}`;
  const signInPagePath = `/${PagesPath.signInPath}`;

  return (
    <List>
      <ListItem>
        <NavLink to={signUpPagePath}>Sign up</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={signInPagePath}>Log in</NavLink>
      </ListItem>
    </List>
  );
};

export default PublicLinks;
