import { FC, useEffect } from 'react';
import { HiPhone } from 'react-icons/hi';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { GiCheckMark } from 'react-icons/gi';
import { useForm, SubmitHandler } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import { Buttons, Form, Title } from './AddContactForm.styled';
import { toasts } from 'utils';
import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { IconBtnType } from 'constants/iconBtnType';
import { BtnType } from 'constants/btnType';
import { IContact } from 'types/types';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { PagesPath } from 'constants/pagesPath';

const AddContactForm: FC = () => {
  const contacts = useAppSelector(selectContacts);
  const isLoading = useAppSelector(selectIsLoading);
  const dispatch = useAppDispatch();
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
    reset,
  } = useForm<IContact>();
  const location = useLocation();
  const goBackLink = location.state?.from || PagesPath.homePath;

  useEffect(() => {
    if (isSubmitting) {
      errors.name && toasts.errorToast('Name is required');
      errors.number && toasts.errorToast('Phone is required');
    }
  }, [errors, isSubmitting]);

  const handleFormSubmit: SubmitHandler<IContact> = (data) => {
    const contactName = data.name;
    const isContact = contacts.some(
      ({ name }: IContact) => name === contactName
    );
    if (isContact) {
      toasts.warnToast(`${contactName} is already in contacts`);
      return;
    }
    dispatch(addContact(data))
      .unwrap()
      .then(() => {
        toasts.successToast('Contact added successfully');
        reset();
      })
      .catch(() => {
        toasts.errorToast('Adding a contact failed');
      });
  };

  return (
    <>
      <Title>Add contact</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          settings={{ ...register('name', { required: true, minLength: 1 }) }}
          type="text"
          placeholder="Name"
          autoFocus
          inputWrap
          fieldIcon={<FaUser />}
          fieldIconSize={18}
        />
        <Input
          settings={{ ...register('number', { required: true }) }}
          type="tel"
          placeholder="Phone"
          inputWrap
          fieldIcon={<HiPhone />}
          fieldIconSize={18}
        />
        <Buttons>
          <IconButton
            disabled={isLoading}
            btnType={IconBtnType.accept}
            width={44}
            height={35}
            type={BtnType.submit}
          >
            <GiCheckMark />
          </IconButton>
          <Link to={goBackLink}>Cancel</Link>
        </Buttons>
      </Form>
    </>
  );
};

export default AddContactForm;
