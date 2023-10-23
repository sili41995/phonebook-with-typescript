import { Description } from './ContactDescription.styled';
import { useTargetContact } from 'hooks';
import { getContactInfo } from 'utils';

const ContactDescription = () => {
  const targetContact = useTargetContact();
  const { description } = getContactInfo(targetContact);

  return <Description>{description}</Description>;
};

export default ContactDescription;
