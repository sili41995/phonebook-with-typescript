import { ChangeEvent, FC, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { InputTypes } from 'constants/index';
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
import ModalForm from 'components/ModalForm';
import Input from 'components/Input';
import GoBackLink from 'components/GoBackLink';
import AcceptBtn from 'components/AcceptBtn';
import image from 'images/default-profile-avatar.png';
import { ButtonsList, Item, Form, Title, Image } from './AddContactForm.styled';

const AddContactForm: FC = () => {
  const [contactAvatar, setContactAvatar] = useState<FileList | null>(null);
  const contacts = useAppSelector(selectContacts);
  const contactAvatarRef = useRef<HTMLImageElement>(null);
  const isLoading = useAppSelector(selectIsLoading);
  const [checked, setChecked] = useState<boolean>(false);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<IContact>();
  const dispatch = useAppDispatch();

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
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
        if (contactAvatarRef.current) {
          contactAvatarRef.current.src = image;
        }
        reset();
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  const onCheckboxChange = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <ModalForm>
      <Title>Add contact</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('avatar') }}
          accept="image/png, image/jpeg, image/jpg"
          onChange={onChangeFile}
          type={InputTypes.file}
          altElem={
            <Image
              src={image}
              alt="profile avatar"
              width="150"
              height="150"
              ref={contactAvatarRef}
            />
          }
        />
        <ContactFormInputs
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          onCheckboxChange={onCheckboxChange}
          checked={checked}
        />
        <ButtonsList>
          <Item>
            <AcceptBtn disabled={isLoading} />
          </Item>
          <Item>
            <GoBackLink />
          </Item>
        </ButtonsList>
      </Form>
    </ModalForm>
  );
};

export default AddContactForm;
