import Input from 'components/Input';
import { IconBtnType, IconSizes, InputTypes } from 'constants/index';
import { useAppSelector } from 'hooks/redux';
import { ChangeEvent, Dispatch, FC, RefObject, SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SlPaperClip } from 'react-icons/sl';
import { selectIsLoading } from 'redux/auth/selectors';
import { IAvatar } from 'types/types';
import { onChangeAvatar } from 'utils';
import { ButtonsContainer, Form } from './ChangeAvatarForm.styled';
import AcceptBtn from 'components/AcceptBtn';
import IconButton from 'components/IconButton';
import { FaTimes } from 'react-icons/fa';

interface IProps {
  avatarRef: RefObject<HTMLImageElement>;
  setAvatar: Dispatch<SetStateAction<FileList | null>>;
  avatar: FileList | null;
  prevAvatar: string;
}

const ChangeAvatarForm: FC<IProps> = ({
  avatarRef,
  setAvatar,
  avatar,
  prevAvatar,
}) => {
  const isLoading = useAppSelector(selectIsLoading);
  const {
    register,
    // formState: { errors, isSubmitting },
    handleSubmit,
    // reset,
  } = useForm<IAvatar>();
  const handleFormSubmit: SubmitHandler<IAvatar> = (data) => {
    console.log(data);
  };

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setAvatar(e.target.files);
    onChangeAvatar({ e, ref: avatarRef });
  };

  const onCancelBtnClick = () => {
    if (avatarRef.current) {
      avatarRef.current.src = prevAvatar;
      setAvatar(null);
    }
  };

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
