import { FC, useEffect } from 'react';
// import { HiPhone } from 'react-icons/hi';
// import { FaUser } from 'react-icons/fa';
// import { Link, useLocation } from 'react-router-dom';
// import { GiCheckMark } from 'react-icons/gi';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import 'react-toastify/dist/ReactToastify.css';
// import IconButton from 'components/IconButton';
// import Input from 'components/Input';
import { Buttons, Form, Title } from './AddContactForm.styled';
import ModalForm from 'components/ModalForm';
// import { toasts } from 'utils';
// import { selectContacts, selectIsLoading } from 'redux/contacts/selectors';
// import { addContact } from 'redux/contacts/operations';
// import { IconBtnType } from 'constants/iconBtnType';
// import { BtnType } from 'constants/btnType';
// import { IContact } from 'types/types';
// import { useAppDispatch, useAppSelector } from 'hooks/redux';
// import { PagesPath } from 'constants/pagesPath';

const AddContactForm: FC = () => {
  return (
    <ModalForm>
      <Title>Add contact</Title>
    </ModalForm>
  );
};

export default AddContactForm;
