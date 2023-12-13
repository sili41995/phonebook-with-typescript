import { ChangeEvent, FC, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import Input from 'components/Input';
import { ButtonsContainer, Form, Title } from './AddContactForm.styled';
import ModalForm from 'components/ModalForm';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { InputTypes } from 'constants/index';
import GoBackLink from 'components/GoBackLink';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import {
  filterEmptyFields,
  getIsContact,
  getProfileFormData,
  onChangeAvatar,
  toasts,
} from 'utils';
import { IContact } from 'types/types';
import { addContact } from 'redux/contacts/operations';
import ContactFormInputs from 'components/ContactFormInputs';
import AcceptBtn from 'components/AcceptBtn';

const AddContactForm: FC = () => {
  const [contactAvatar, setContactAvatar] = useState<FileList | null>(null);
  const contacts = useAppSelector(selectContacts);
  const contactAvatarRef = useRef<HTMLImageElement>(null);
  const isLoading = useAppSelector(selectIsLoading);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<IContact>();
  const dispatch = useAppDispatch();

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setContactAvatar(e.target.files);
    onChangeAvatar({ e, ref: contactAvatarRef });
  };

  const handleFormSubmit: SubmitHandler<IContact> = (data) => {
    const newContactName = data.name;
    const isContact = getIsContact({ newContactName, contacts });

    if (isContact) {
      toasts.warnToast(`${newContactName} is already in contacts`);
      return;
    }

    if (contactAvatar) {
      data.avatar = contactAvatar;
    }

    const contactData = filterEmptyFields<IContact>(data);
    const contactFormData = getProfileFormData(contactData);

    dispatch(addContact(contactFormData))
      .unwrap()
      .then(() => {
        toasts.successToast('Contact added successfully');
        reset();
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  return (
    <ModalForm>
      <Title>Add contact</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('avatar') }}
          accept="image/png, image/jpeg, image/jpg"
          onChange={onChangeInput}
          type={InputTypes.file}
          imageRef={contactAvatarRef}
        />
        <ContactFormInputs
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
        />
        <ButtonsContainer>
          <AcceptBtn disabled={isLoading} />
          <GoBackLink />
        </ButtonsContainer>
      </Form>
    </ModalForm>
  );
};

export default AddContactForm;
