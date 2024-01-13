import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { SlPaperClip, SlBan } from 'react-icons/sl';
import {
  AriaLabels,
  IconBtnType,
  IconSizes,
  InputTypes,
} from 'constants/index';
import { useAppSelector } from 'hooks/redux';
import { selectIsLoading } from 'redux/auth/selectors';
import { IAvatar } from 'types/types';
import AcceptBtn from 'components/AcceptBtn';
import IconButton from 'components/IconButton';
import Input from 'components/Input';
import { IProps } from './ChangeAvatarForm.types';
import { ButtonsList, Item, Form } from './ChangeAvatarForm.styled';

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
        <ButtonsList>
          <Item>
            <AcceptBtn disabled={isLoading} />
          </Item>
          <Item>
            <IconButton
              btnType={IconBtnType.cancel}
              onBtnClick={onCancelBtnClick}
              aria-label={AriaLabels.cancel}
              icon={<SlBan size={IconSizes.primaryIconSize} />}
            />
          </Item>
        </ButtonsList>
      ) : (
        <Input
          settings={{ ...register('avatar') }}
          accept="image/png, image/jpeg, image/jpg"
          onChange={onChangeInput}
          type={InputTypes.file}
          aria-label={AriaLabels.avatar}
          altElem={<SlPaperClip size={IconSizes.primaryIconSize} />}
        />
      )}
    </Form>
  );
};

export default ChangeAvatarForm;
