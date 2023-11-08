import 'react-toastify/dist/ReactToastify.css';
import { SlLogout } from 'react-icons/sl';
import { useLocation, useNavigate } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';
import IconButton from 'components/IconButton';
import Filter from 'components/Filter';
import LinkWithQuery from 'components/LinkWithQuery';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import { makeBlur, toasts, isContactsPage } from 'utils';
import { selectContacts } from 'redux/contacts/selectors';
import { logoutUser } from 'redux/auth/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { MouseEvent } from 'react';
import { PagesPath } from 'constants/pagesPath';
import { IconBtnType } from 'constants/iconBtnType';

const PrivateLinks = () => {
  const contacts = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const path = `/${PagesPath.addNewContactPath}`;

  const onLogoutBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    dispatch(logoutUser())
      .unwrap()
      .then(() => {
        toasts.successToast('Goodbye!');
        navigate(PagesPath.homePath);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <LinkContainer>
      {isContactsPage(location.pathname) && !!contacts.length && <Filter />}
      <LinkWithQuery to={path} state={{ from: location }}>
        <IconContainer>
          <GrAddCircle />
        </IconContainer>
        New Contact
      </LinkWithQuery>
      <IconButton
        btnType={IconBtnType.logout}
        iconSize={28}
        width={44}
        onBtnClick={onLogoutBtnClick}
      >
        <IconContainer>
          <SlLogout />
        </IconContainer>
        Logout
      </IconButton>
    </LinkContainer>
  );
};

export default PrivateLinks;
