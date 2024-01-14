import { FC } from 'react';
import { Container, Image } from './ImageContainer.styled';
import { IProps } from './ImageContainer.types';
import ChangeAvatarForm from 'components/ChangeAvatarForm';

const ImageContainer: FC<IProps> = ({
  avatar,
  avatarRef,
  updateAvatar,
  handleFormSubmit,
  onChangeInput,
  onCancelBtnClick,
  imgSize,
}) => (
  <Container>
    <Image
      src={avatar}
      alt="profile photo"
      width={imgSize}
      height={imgSize}
      ref={avatarRef}
    />
    <ChangeAvatarForm
      avatar={updateAvatar}
      handleFormSubmit={handleFormSubmit}
      onChangeInput={onChangeInput}
      onCancelBtnClick={onCancelBtnClick}
    />
  </Container>
);

export default ImageContainer;
