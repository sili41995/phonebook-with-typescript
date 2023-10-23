import { Container } from './ContactModalForm.styled';
import { IProps } from './ContactModalForm.types';

const ContactModalForm = ({ children }: IProps) => (
  <Container>{children}</Container>
);

export default ContactModalForm;
