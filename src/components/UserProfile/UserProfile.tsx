import { FC, useEffect, useState } from 'react';
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
import { ICurrentUser } from 'types/types';
import contactsServiceApi from 'service/contactsServiceApi';
import { toasts } from 'utils';
import Loader from 'components/Loader';
import { IconSizes } from 'constants/index';
// import { selectUser } from 'redux/auth/selectors';
// import { useAppSelector } from 'hooks/redux';

const UserProfile: FC = () => {
  const [user, setUser] = useState<ICurrentUser | {}>({});
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const { name, avatar, email, dateOfBirth, phone, location, lastName } =
    user as ICurrentUser;
  const fullName = lastName ? `${name} ${lastName}` : name;

  useEffect(() => {
    const getUser = async () => {
      setIsLoading(true);
      try {
        const user = await contactsServiceApi.refreshUser();
        setUser(user);
      } catch (error) {
        if (error instanceof Error) {
          toasts.errorToast(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  return (
    <UserProfileContainer>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </UserProfileContainer>
  );
};

export default UserProfile;
