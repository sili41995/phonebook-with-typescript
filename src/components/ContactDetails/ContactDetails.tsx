import { useParams } from 'react-router-dom';
import {
  AiFillStar,
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineStar,
} from 'react-icons/ai';
import {
  ButtonsContainer,
  Container,
  ManipulationButtons,
} from './ContactDetails.styled';
import DefaultMessage from 'components/DefaultMessage';
import {
  FetchStatuses,
  IconBtnType,
  IconSizes,
  PagePaths,
} from 'constants/index';
import { MouseEvent, useEffect, useState } from 'react';
import { IContact } from 'types/types';
import contactsServiceApi from 'service/contactsServiceApi';
import { makeBlur, toasts } from 'utils';
import ContactProfile from 'components/ContactProfile';
import Loader from 'components/Loader';
import GoBackLink from 'components/GoBackLink';
import IconButton from 'components/IconButton';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import useDeleteContact from 'hooks/useDeleteContact';
import { updateContactStatus } from 'redux/contacts/operations';

const { idle, pending, resolved, rejected } = FetchStatuses;

const ContactDetails = () => {
  const deleteContact = useDeleteContact();
  const dispatch = useAppDispatch();
  const [contact, setContact] = useState<IContact | null>(null);
  const [editContact, setEditContact] = useState<boolean>(false);
  const [fetchContactStatus, setFetchContactStatus] = useState<FetchStatuses>(
    () => idle
  );
  const id = useParams()[PagePaths.dynamicParam];
  const isLoading = useAppSelector(selectIsLoading);
  const isLoadingContact = fetchContactStatus === pending;
  const isLoadedContact = fetchContactStatus === resolved && contact;
  const isFetchError = fetchContactStatus === rejected;
  const favoriteBtnIcon = contact?.favorite ? (
    <AiFillStar size={IconSizes.primaryIconSize} />
  ) : (
    <AiOutlineStar size={IconSizes.primaryIconSize} />
  );

  useEffect(() => {
    setEditContact(false);
  }, [id]);

  useEffect(() => {
    const getContact = async (id: string) => {
      setFetchContactStatus(pending);
      try {
        const contact = await contactsServiceApi.fetchContactById(id);
        setContact(contact);
        setFetchContactStatus(resolved);
      } catch (error) {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
          setFetchContactStatus(rejected);
        }
      }
    };

    id && getContact(id);
  }, [id]);

  const onDelBtnClick = () => {
    if (id) {
      deleteContact(id);
    }
  };

  const onEditBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    setEditContact((prevState) => !prevState);
    makeBlur(e.currentTarget);
  };

  const onFavoriteBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    makeBlur(e.currentTarget);

    if (!contact?._id) return;

    const { favorite, _id: id } = contact;
    const data = { favorite: !favorite };
    dispatch(updateContactStatus({ data, id }))
      .unwrap()
      .then(() => {
        toasts.successToast('Contact status updated successfully');
        setContact(
          (prevState) =>
            ({ ...prevState, favorite: !prevState?.favorite } as IContact)
        );
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  const updateContact = (data: IContact): void => {
    setContact(data);
  };

  return isLoadingContact ? (
    <Loader />
  ) : (
    <Container>
      <ButtonsContainer>
        <GoBackLink />
        {isLoadedContact && (
          <ManipulationButtons>
            {!editContact && (
              <>
                <IconButton
                  disabled={isLoading}
                  btnType={IconBtnType.favorite}
                  width={44}
                  height={35}
                  onBtnClick={onFavoriteBtnClick}
                  icon={favoriteBtnIcon}
                />
                <IconButton
                  disabled={isLoading}
                  btnType={IconBtnType.delete}
                  width={44}
                  height={35}
                  onBtnClick={onDelBtnClick}
                  icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />}
                />
              </>
            )}
            <IconButton
              btnType={IconBtnType.edit}
              width={44}
              height={35}
              onBtnClick={onEditBtnClick}
              icon={<AiOutlineEdit size={IconSizes.primaryIconSize} />}
            />
          </ManipulationButtons>
        )}
      </ButtonsContainer>
      {isLoadedContact && (
        <ContactProfile
          contact={contact}
          editContact={editContact}
          onEditBtnClick={onEditBtnClick}
          setContact={updateContact}
        />
      )}
      {isFetchError && <DefaultMessage message="Contact is absent" />}
    </Container>
  );
};

export default ContactDetails;
