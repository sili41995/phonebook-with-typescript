import { FC, Suspense } from 'react';
import { IProps } from './ContactProfile.types';
import {
  ContactDesc,
  ContactName,
  ContactTitle,
  Image,
  ListItem,
  NavBar,
  NavList,
} from './ContactProfile.styled';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader';
import { PagePaths } from 'constants/index';
import EditContactForm from 'components/EditContactForm';

const ContactProfile: FC<IProps> = ({
  contact,
  editContact,
  ...otherProps
}) => {
  const { avatar, name, role } = contact;

  return (
    <>
      <Image src={avatar as string} alt={`${name} photo`} />
      {editContact ? (
        <EditContactForm {...otherProps} />
      ) : (
        <>
          <ContactTitle>
            <ContactName>{name}</ContactName>
            {role && <ContactDesc>{role}</ContactDesc>}
          </ContactTitle>
          <NavBar>
            <NavList>
              <ListItem>
                <NavLink to={PagePaths.contactPath}>Contact</NavLink>
              </ListItem>
              <ListItem>
                <NavLink to={PagePaths.aboutPath}>About</NavLink>
              </ListItem>
            </NavList>
          </NavBar>
          <Suspense fallback={<Loader />}>
            <Outlet context={contact} />
          </Suspense>
        </>
      )}
    </>
  );
};

export default ContactProfile;
