import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonsContainer, Form, Title } from './EditContactForm.styled';
import IconButton from 'components/IconButton';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IContact } from 'types/types';
import { IProps } from './EditContactForm.types';
import ContactFormInputs from 'components/ContactFormInputs';
import ModalForm from 'components/ModalForm';
import AcceptBtn from 'components/AcceptBtn';
import { IconBtnType, IconSizes, PagePaths } from 'constants/index';
import { FaTimes } from 'react-icons/fa';
import { updateContact } from 'redux/contacts/operations';
import { useParams } from 'react-router-dom';
import { toasts } from 'utils';
import { useState } from 'react';

const EditContactForm = ({
  onEditBtnClick,
  setContact,
  contact,
  ...otherProps
}: IProps) => {
  const [checked, setChecked] = useState<boolean>(
    () => contact.favorite as boolean
  );
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const id = useParams()[PagePaths.dynamicParam] as string;
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IContact>();

  const handleFormSubmit: SubmitHandler<IContact> = (data) => {
    dispatch(updateContact({ data, id }))
      .unwrap()
      .then((data) => {
        toasts.successToast('Contact updated successfully');
        setContact(data);
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
      <Title>Contact editing</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <ContactFormInputs
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          contact={contact}
          onCheckboxChange={onCheckboxChange}
          checked={checked}
          {...otherProps}
        />
        <ButtonsContainer>
          <AcceptBtn disabled={isLoading} />
          <IconButton
            btnType={IconBtnType.cancel}
            width={44}
            height={35}
            onBtnClick={onEditBtnClick}
            icon={<FaTimes size={IconSizes.primaryIconSize} />}
          />
        </ButtonsContainer>
      </Form>
    </ModalForm>
  );
};

export default EditContactForm;
