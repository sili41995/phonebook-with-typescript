// import { HiOutlinePhone } from 'react-icons/hi';
// import { IoMdMail } from 'react-icons/io';
// import { RiChat1Line } from 'react-icons/ri';
import {
  InfoDesc,
  InfoData,
  Container,
  Field,
  InfoWrap,
} from './ContactData.styled';
// import ActionLink from 'components/ActionLink';
// import { getContactInfo, getPhoneNumber } from 'utils';
// import { useTargetContact } from 'hooks';
// import { IconBtnType } from 'constants/iconBtnType';

const ContactData = () => {
  // const targetContact = useTargetContact();
  // const { number, email, chat } = getContactInfo(targetContact);
  // const phoneNumber = getPhoneNumber(number);

  return (
    <Container>
      {/* <Field>
        <InfoWrap>
          <InfoDesc>Phone number</InfoDesc>
          <InfoData>{number}</InfoData>
        </InfoWrap>
        <ActionLink link={`tel:${phoneNumber}`} btnType={IconBtnType.phone}>
          <HiOutlinePhone />
        </ActionLink>
      </Field>
      <Field>
        <InfoWrap>
          <InfoDesc>Email Address</InfoDesc>
          <InfoData>{email}</InfoData>
        </InfoWrap>
        <ActionLink link={`mailto:${email}`} btnType={IconBtnType.message}>
          <IoMdMail />
        </ActionLink>
      </Field>
      <Field>
        <InfoWrap>
          <InfoDesc>Chat</InfoDesc>
          <InfoData>{chat}</InfoData>
        </InfoWrap>
        <ActionLink
          link={`tg://resolve?domain=${chat}`}
          btnType={IconBtnType.chat}
        >
          <RiChat1Line />
        </ActionLink>
      </Field> */}
    </Container>
  );
};

export default ContactData;
