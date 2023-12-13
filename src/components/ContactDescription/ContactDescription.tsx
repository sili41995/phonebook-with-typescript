import { FC } from 'react';
import { useOutletContext } from 'react-router-dom';
import { IContact } from 'types/types';
import { Title, Description } from './ContactDescription.styled';

const ContactDescription: FC = () => {
  const contact: IContact = useOutletContext();
  const { description } = contact;

  return (
    <>
      <Title>Description</Title>
      <Description>{description ? description : 'No description'}</Description>
    </>
  );
};

export default ContactDescription;
