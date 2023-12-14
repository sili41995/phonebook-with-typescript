import { FC, useEffect, useRef, useState } from 'react';
import { SlPhone, SlEvent, SlLocationPin } from 'react-icons/sl';
import 'react-toastify/dist/ReactToastify.css';
import {
  UserInfo,
  Email,
  FullName,
  Image,
  Name,
  ContactInfo,
  UserData,
  ContactInfoIconWrap,
  UserProfileContainer,
  ImageContainer,
} from './UserProfile.styled';
import { IconSizes } from 'constants/index';
import { IProps } from './UserProfile.types';
import ChangeAvatarForm from 'components/ChangeAvatarForm';

const UserProfile: FC<IProps> = ({ user }) => {
  const [userAvatar, setUserAvatar] = useState<FileList | null>(null);
  const userAvatarRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    console.log(userAvatar?.length);
  }, [userAvatar]);

  if (!user) return <UserProfileContainer />;

  const { name, avatar, email, dateOfBirth, phone, location, lastName } = user;
  const fullName = lastName ? `${name} ${lastName}` : name;

  return (
    <UserProfileContainer>
      <Name>{name}</Name>
      <UserData>
        <ImageContainer>
          <Image src={avatar} alt="user avatar" ref={userAvatarRef} />
          <ChangeAvatarForm
            avatarRef={userAvatarRef}
            setAvatar={setUserAvatar}
            avatar={userAvatar}
            prevAvatar={avatar}
          />
        </ImageContainer>
        <FullName>{fullName}</FullName>
        <Email>{email}</Email>
      </UserData>
      {(phone || dateOfBirth || location) && (
        <UserInfo>
          {dateOfBirth && (
            <ContactInfo>
              <ContactInfoIconWrap>
                <SlEvent size={IconSizes.secondaryIconSize} />
              </ContactInfoIconWrap>
              <p>{dateOfBirth}</p>
            </ContactInfo>
          )}
          {phone && (
            <ContactInfo>
              <ContactInfoIconWrap>
                <SlPhone size={IconSizes.secondaryIconSize} />
              </ContactInfoIconWrap>
              <p>{phone}</p>
            </ContactInfo>
          )}
          {location && (
            <ContactInfo>
              <ContactInfoIconWrap>
                <SlLocationPin size={IconSizes.secondaryIconSize} />
              </ContactInfoIconWrap>
              <p>{location}</p>
            </ContactInfo>
          )}
        </UserInfo>
      )}
    </UserProfileContainer>
  );
};

export default UserProfile;
