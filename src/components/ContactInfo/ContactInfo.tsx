import { useOutletContext } from 'react-router-dom';
import { FaEnvelope, FaPhoneAlt, FaRegComment } from 'react-icons/fa';
import { IContact } from 'types/types';
import ActionLink from 'components/ActionLink';
import { AriaLabels, IconBtnType, IconSizes } from 'constants/index';
import { getPhoneNumber, getTelegramLink } from 'utils';
import { Title, Description, List, Item, Info } from './ContactInfo.styled';

const ContactInfo = () => {
  const contact: IContact = useOutletContext();
  const { phone, email, tgUsername } = contact;
  const phoneNumber = getPhoneNumber(phone);
  const telegramLink = getTelegramLink(tgUsername);

  return (
    <List>
      <Item>
        <Info>
          <Title>Phone number</Title>
          <Description>{phone}</Description>
        </Info>
        <ActionLink
          link={`tel:${phoneNumber}`}
          btnType={IconBtnType.phone}
          aria-label={AriaLabels.call}
          icon={<FaPhoneAlt size={IconSizes.otherIconSize} />}
        />
      </Item>
      {email && (
        <Item>
          <Info>
            <Title>Email Address</Title>
            <Description>{email}</Description>
          </Info>
          <ActionLink
            link={`mailto:${email}`}
            btnType={IconBtnType.message}
            aria-label={AriaLabels.sendEmail}
            icon={<FaEnvelope size={IconSizes.otherIconSize} />}
          />
        </Item>
      )}
      {tgUsername && (
        <Item>
          <Info>
            <Title>Username on Telegram</Title>
            <Description>{tgUsername}</Description>
          </Info>
          <ActionLink
            link={`tg://resolve?domain=${telegramLink}`}
            btnType={IconBtnType.chat}
            aria-label={AriaLabels.tgAccount}
            icon={<FaRegComment size={IconSizes.otherIconSize} />}
          />
        </Item>
      )}
    </List>
  );
};

export default ContactInfo;
