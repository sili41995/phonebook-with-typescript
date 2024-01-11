import { ChangeEvent, FC, Suspense, useRef, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { NavLink, Outlet } from 'react-router-dom';
import { IProps } from './ContactProfile.types';
import Loader from 'components/Loader';
import EditContactForm from 'components/EditContactForm';
import ChangeAvatarForm from 'components/ChangeAvatarForm';
import { Messages, PagePaths } from 'constants/index';
import { getProfileFormData, onChangeAvatar, toasts } from 'utils';
import { IAvatar } from 'types/types';
import { useAppDispatch } from 'hooks/redux';
import { updateContactAvatar } from 'redux/contacts/operations';
import {
  ContactDesc,
  ContactName,
  ContactTitle,
  Image,
  ListItem,
  NavBar,
  NavList,
  ImageContainer,
} from './ContactProfile.styled';

const ContactProfile: FC<IProps> = ({
  contact,
  editContact,
  ...otherProps
}) => {
  const [contactAvatar, setContactAvatar] = useState<FileList | null>(null);
  const contactAvatarRef = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch();
  const { avatar, name, role, _id: id } = contact;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setContactAvatar(e.target.files);
    onChangeAvatar({ e, ref: contactAvatarRef });
  };

  const handleFormSubmit: SubmitHandler<IAvatar> = (data) => {
    if (!contactAvatar?.length) {
      return;
    }

    data.avatar = contactAvatar;
    const contactFormData = getProfileFormData(data);

    if (!id) return;

    dispatch(updateContactAvatar({ data: contactFormData, id }))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.updateAvatar);
        setContactAvatar(null);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  const onCancelBtnClick = () => {
    if (contactAvatarRef.current) {
      contactAvatarRef.current.src = avatar as string;
      setContactAvatar(null);
    }
  };

  return (
    <>
      <ImageContainer>
        <Image
          src={avatar as string}
          alt={`${name} photo`}
          width="200"
          height="200"
          ref={contactAvatarRef}
        />
        <ChangeAvatarForm
          avatar={contactAvatar}
          handleFormSubmit={handleFormSubmit}
          onChangeInput={onChangeInput}
          onCancelBtnClick={onCancelBtnClick}
        />
      </ImageContainer>
      {editContact ? (
        <EditContactForm {...otherProps} contact={contact} />
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
