import { ChangeEvent, FC, useRef, useState } from 'react';
import { SlPhone, SlEvent, SlLocationPin } from 'react-icons/sl';
import 'react-toastify/dist/ReactToastify.css';
import { IconSizes, Messages } from 'constants/index';
import { IProps } from './UserProfile.types';
import ChangeAvatarForm from 'components/ChangeAvatarForm';
import { SubmitHandler } from 'react-hook-form';
import { IAvatar } from 'types/types';
import { getProfileFormData, onChangeAvatar, toasts } from 'utils';
import { useAppDispatch } from 'hooks/redux';
import { updateUserAvatar } from 'redux/auth/operations';
import {
  InfoList,
  Email,
  FullName,
  Image,
  Name,
  InfoItem,
  UserData,
  ContactInfoIconWrap,
  UserProfileContainer,
  ImageContainer,
} from './UserProfile.styled';

const UserProfile: FC<IProps> = ({ user }) => {
  const [userAvatar, setUserAvatar] = useState<FileList | null>(null);
  const userAvatarRef = useRef<HTMLImageElement>(null);
  const dispatch = useAppDispatch();

  if (!user) return <UserProfileContainer />;

  const { name, avatar, email, dateOfBirth, phone, location, lastName } = user;
  const fullName = lastName ? `${name} ${lastName}` : name;

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) {
      return;
    }

    setUserAvatar(e.target.files);
    onChangeAvatar({ e, ref: userAvatarRef });
  };

  const handleFormSubmit: SubmitHandler<IAvatar> = (data) => {
    if (!userAvatar?.length) {
      return;
    }

    data.avatar = userAvatar;
    const userFormData = getProfileFormData(data);

    dispatch(updateUserAvatar(userFormData))
      .unwrap()
      .then(() => {
        toasts.successToast(Messages.updateAvatar);
        setUserAvatar(null);
      })
      .catch((error) => {
        toasts.errorToast(error);
      });
  };

  const onCancelBtnClick = () => {
    if (userAvatarRef.current) {
      userAvatarRef.current.src = avatar;
      setUserAvatar(null);
    }
  };

  return (
    <UserProfileContainer>
      <Name>{name}</Name>
      <UserData>
        <ImageContainer>
          <Image
            src={avatar}
            alt="user avatar"
            width="150"
            height="150"
            ref={userAvatarRef}
          />
          <ChangeAvatarForm
            avatar={userAvatar}
            handleFormSubmit={handleFormSubmit}
            onChangeInput={onChangeInput}
            onCancelBtnClick={onCancelBtnClick}
          />
        </ImageContainer>
        <FullName>{fullName}</FullName>
        <Email>{email}</Email>
      </UserData>
      {(phone || dateOfBirth || location) && (
        <InfoList>
          {dateOfBirth && (
            <InfoItem>
              <ContactInfoIconWrap>
                <SlEvent size={IconSizes.secondaryIconSize} />
              </ContactInfoIconWrap>
              <p>{dateOfBirth}</p>
            </InfoItem>
          )}
          {phone && (
            <InfoItem>
              <ContactInfoIconWrap>
                <SlPhone size={IconSizes.secondaryIconSize} />
              </ContactInfoIconWrap>
              <p>{phone}</p>
            </InfoItem>
          )}
          {location && (
            <InfoItem>
              <ContactInfoIconWrap>
                <SlLocationPin size={IconSizes.secondaryIconSize} />
              </ContactInfoIconWrap>
              <p>{location}</p>
            </InfoItem>
          )}
        </InfoList>
      )}
    </UserProfileContainer>
  );
};

export default UserProfile;
