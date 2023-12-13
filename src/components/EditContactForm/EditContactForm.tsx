// import { HiPhone } from 'react-icons/hi';
// import { FaUser } from 'react-icons/fa';
// import { useParams } from 'react-router-dom';
// import { GoX } from 'react-icons/go';
// import { GiCheckMark } from 'react-icons/gi';
import { SubmitHandler, useForm } from 'react-hook-form';
import 'react-toastify/dist/ReactToastify.css';
import { Buttons, Form, Title } from './EditContactForm.styled';
// import IconButton from 'components/IconButton';
// import Input from 'components/Input';
// import { getContactInfo, toasts } from 'utils';
// import { useTargetContact } from 'hooks';
// import { updateContact } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/contacts/selectors';
// import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IContact } from 'types/types';
// import { useEffect } from 'react';
// import { BtnType } from 'constants/btnType';
import { IProps } from './EditContactForm.types';
import ContactFormInputs from 'components/ContactFormInputs';
import ModalForm from 'components/ModalForm';
// import { PagesPath } from 'constants/pagesPath';
// import { IconBtnType } from 'constants/iconBtnType';

const EditContactForm = ({ setEditContact, ...otherProps }: IProps) => {
  // const isLoading = useAppSelector(selectIsLoading);
  // const dispatch = useAppDispatch();
  // const id = useParams()[PagesPath.dynamicParam];
  // const targetContact = useTargetContact();
  // const { name, number } = getContactInfo(targetContact);
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<IContact>();

  const handleFormSubmit: SubmitHandler<IContact> = (data) => {
    //   if (id) {
    //     dispatch(updateContact({ data, id }))
    //       .unwrap()
    //       .then(() => {
    //         toasts.successToast('Contact updated successfully');
    //       })
    //       .catch(() => {
    //         toasts.errorToast('Contact update failed');
    //       });
    //   }
  };

  return (
    <ModalForm>
      <Title>Contact editing</Title>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <ContactFormInputs
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          {...otherProps}
        />
      </Form>

      {/* <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <Input
          defaultValue={name}
          settings={{ ...register('name', { required: true }) }}
          type="text"
          placeholder="Name"
          inputWrap
          fieldIcon={<FaUser />}
          fieldIconSize={18}
        />
        <Input
          defaultValue={number}
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
          <IconButton
            btnType={IconBtnType.cancel}
            width={44}
            height={35}
            onBtnClick={setEditContact}
          >
            <GoX />
          </IconButton>
        </Buttons>
      </Form> */}
    </ModalForm>
  );
};

export default EditContactForm;
