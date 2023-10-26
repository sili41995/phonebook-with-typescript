import { useParams } from 'react-router-dom';
import { MouseEvent, useState } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { Container, ButtonContainer } from './ContactDetails.styled';
import ContactInfo from 'components/ContactInfo';
import EditForm from 'components/EditForm';
import ContactModalForm from 'components/ContactModalForm';
import IconButton from 'components/IconButton';
import { makeBlur } from 'utils';
import { useDeleteContact, useTargetContact } from 'hooks';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useAppSelector } from 'hooks/redux';
import { IconBtnType } from 'constants/iconBtnType';
import { PagesPath } from 'constants/pagesPath';
import DefaultMessage from 'components/DefaultMessage';

const ContactDetails = () => {
  const [editContact, setEditContact] = useState<boolean>(false);
  const isLoading = useAppSelector(selectIsLoading);
  const id = useParams()[PagesPath.dynamicParam];
  const deleteContact = useDeleteContact();
  const { id: contactId } = useTargetContact();

  const setEditState = () => {
    setEditContact((editContact) => !editContact);
  };

  const handleEditBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
    setEditState();
    makeBlur(e.currentTarget);
  };

  const handleDelBtnClick = () => {
    if (id) {
      deleteContact(id);
    }
  };

  return contactId ? (
    <>
      <Container>
        <ButtonContainer>
          {!editContact && (
            <IconButton
              disabled={isLoading}
              btnType={IconBtnType.delete}
              width={44}
              height={35}
              onBtnClick={handleDelBtnClick}
            >
              <AiOutlineDelete />
            </IconButton>
          )}
          <IconButton
            btnType={IconBtnType.edit}
            width={44}
            height={35}
            onBtnClick={handleEditBtnClick}
          >
            <CiEdit />
          </IconButton>
        </ButtonContainer>
        {editContact ? (
          <ContactModalForm>
            <EditForm setEditContact={setEditState} />
          </ContactModalForm>
        ) : (
          <ContactInfo />
        )}
      </Container>
    </>
  ) : (
    <DefaultMessage message="Contact is absent" />
  );
};

export default ContactDetails;
