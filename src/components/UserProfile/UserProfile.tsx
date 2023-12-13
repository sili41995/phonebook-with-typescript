import { FC } from 'react';
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
} from './UserProfile.styled';
import { IconSizes } from 'constants/index';
import { IProps } from './UserProfile.types';

const UserProfile: FC<IProps> = ({ user }) => {
  if (!user) return <UserProfileContainer />;

  const { name, avatar, email, dateOfBirth, phone, location, lastName } = user;
  const fullName = lastName ? `${name} ${lastName}` : name;

  return (
    <UserProfileContainer>
      <Name>{name}</Name>
      <UserData>
        <Image src={avatar} alt="user avatar" />
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
