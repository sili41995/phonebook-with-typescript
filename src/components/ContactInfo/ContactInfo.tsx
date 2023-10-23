import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useTargetContact } from 'hooks';
import { getContactInfo } from 'utils';
import Loader from 'components/Loader';
import {
  ContactDesc,
  ContactName,
  ContactTitle,
  Image,
  ListItem,
  List,
  Navigation,
} from './ContactInfo.styled';
import { PagesPath } from 'constants/pagesPath';

const ContactInfo = () => {
  const targetContact = useTargetContact();
  const { name, role, userAvatar } = getContactInfo(targetContact);

  return (
    <>
      <Image src={userAvatar} alt={`${name} photo`} />
      <ContactTitle>
        <ContactName>{name}</ContactName>
        <ContactDesc>{role}</ContactDesc>
      </ContactTitle>
      <Navigation>
        <List>
          <ListItem>
            <NavLink to={PagesPath.contactPath}>Contact</NavLink>
          </ListItem>
          <ListItem>
            <NavLink to={PagesPath.aboutPath}>About</NavLink>
          </ListItem>
        </List>
      </Navigation>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ContactInfo;
