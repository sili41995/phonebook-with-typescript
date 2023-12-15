import Input from 'components/Input';
import { IconBtnType, IconSizes, InputTypes } from 'constants/index';
import { useAppSelector } from 'hooks/redux';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { SlPaperClip } from 'react-icons/sl';
import { selectIsLoading } from 'redux/auth/selectors';
import { IAvatar } from 'types/types';
import { ButtonsContainer, Form } from './ChangeAvatarForm.styled';
import AcceptBtn from 'components/AcceptBtn';
import IconButton from 'components/IconButton';
import { FaTimes } from 'react-icons/fa';
import { IProps } from './ChangeAvatarForm.types';

const ChangeAvatarForm: FC<IProps> = ({
  avatar,
  handleFormSubmit,
  onChangeInput,
  onCancelBtnClick,
}) => {
  const isLoading = useAppSelector(selectIsLoading);
  const { register, handleSubmit } = useForm<IAvatar>();

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      {avatar?.length ? (
        <ButtonsContainer>
          <AcceptBtn disabled={isLoading} />
          <IconButton
            btnType={IconBtnType.cancel}
            width={44}
            height={35}
            onBtnClick={onCancelBtnClick}
            icon={<FaTimes size={IconSizes.primaryIconSize} />}
          />
        </ButtonsContainer>
      ) : (
        <Input
          settings={{ ...register('avatar') }}
          accept="image/png, image/jpeg, image/jpg"
          onChange={onChangeInput}
          type={InputTypes.file}
          altElem={<SlPaperClip size={IconSizes.primaryIconSize} />}
        />
      )}
    </Form>
  );
};

export default ChangeAvatarForm;
