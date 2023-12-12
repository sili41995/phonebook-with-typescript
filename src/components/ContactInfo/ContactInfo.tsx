import { FaEnvelope, FaPhoneAlt, FaRegComment } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';
import {
  Title,
  Description,
  Container,
  Field,
  Info,
} from './ContactInfo.styled';
import { IContact } from 'types/types';
import ActionLink from 'components/ActionLink';
import { IconBtnType, IconSizes } from 'constants/index';
import { getPhoneNumber, getTelegramLink } from 'utils';

const ContactInfo = () => {
  const contact: IContact = useOutletContext();
  const { phone, email, tgUsername = '' } = contact;
  const phoneNumber = getPhoneNumber(phone);
  const telegramLink = getTelegramLink(tgUsername);

  return (
    <Container>
      <Field>
        <Info>
          <Title>Phone number</Title>
          <Description>{phone}</Description>
        </Info>
        <ActionLink
          link={`tel:${phoneNumber}`}
          btnType={IconBtnType.phone}
          icon={<FaPhoneAlt size={IconSizes.otherIconSize} />}
        />
      </Field>
      {email && (
        <Field>
          <Info>
            <Title>Email Address</Title>
            <Description>{email}</Description>
          </Info>
          <ActionLink
            link={`mailto:${email}`}
            btnType={IconBtnType.message}
            icon={<FaEnvelope size={IconSizes.otherIconSize} />}
          />
        </Field>
      )}
      <Field>
        <Info>
          <Title>Username on Telegram</Title>
          <Description>{tgUsername}</Description>
        </Info>
        <ActionLink
          link={`tg://resolve?domain=${telegramLink}`}
          btnType={IconBtnType.chat}
          icon={<FaRegComment size={IconSizes.otherIconSize} />}
        />
      </Field>
    </Container>
  );
};

export default ContactInfo;
