import { MouseEvent } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { SlLogout, SlPlus } from 'react-icons/sl';
import { useLocation, useNavigate } from 'react-router-dom';
import IconButton from 'components/IconButton';
import Filter from 'components/Filter';
import LinkWithQuery from 'components/LinkWithQuery';
import { IconContainer, LinkContainer } from './PrivateLinks.styled';
import { makeBlur, toasts, getIsContactsPage } from 'utils';
import { selectContacts } from 'redux/contacts/selectors';
import { signOutUser } from 'redux/auth/operations';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IconBtnType, IconSizes, PagePaths } from 'constants/index';

const PrivateLinks = () => {
  const contacts = useAppSelector(selectContacts);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const isContactsPage = getIsContactsPage(pathname);
  const showFilter = isContactsPage && Boolean(contacts.length);

  const onLogoutBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);
    dispatch(signOutUser())
      .unwrap()
      .then(() => {
        toasts.successToast('Goodbye!');
        navigate(PagePaths.homePath);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <LinkContainer>
      {showFilter && <Filter />}
      <LinkWithQuery to={PagePaths.addNewContactPath}>
        <IconContainer>
          <SlPlus />
        </IconContainer>
        New Contact
      </LinkWithQuery>
      <IconButton
        btnType={IconBtnType.logout}
        width={44}
        onBtnClick={onLogoutBtnClick}
        icon={<SlLogout size={IconSizes.otherIconSize} />}
        title="Logout"
      />
    </LinkContainer>
  );
};

export default PrivateLinks;
