import { ChangeEvent, FC, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaCheck } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import Input from 'components/Input';
import {
  ButtonsContainer,
  Form,
  Title,
  Image,
  CheckboxTitle,
  InputWrap,
} from './AddContactForm.styled';
import ModalForm from 'components/ModalForm';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { IconSizes, InputTypes } from 'constants/index';
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
import image from 'images/default-profile-avatar.png';

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
            <Image src={image} alt="profile avatar" ref={contactAvatarRef} />
          }
        />
        <ContactFormInputs
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
        />
        <InputWrap>
          <CheckboxTitle>Favorite contact</CheckboxTitle>
          <Input
            settings={{ ...register('favorite') }}
            checked={checked}
            onChange={onCheckboxChange}
            type={InputTypes.checkbox}
            altElem={<FaCheck size={IconSizes.primaryIconSize} />}
          />
        </InputWrap>
        <ButtonsContainer>
          <AcceptBtn disabled={isLoading} />
          <GoBackLink />
        </ButtonsContainer>
      </Form>
    </ModalForm>
  );
};

export default AddContactForm;
