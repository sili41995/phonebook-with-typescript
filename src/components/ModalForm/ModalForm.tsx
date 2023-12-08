import { FC } from 'react';
import { Container } from './ModalForm.styled';
import { IProps } from './ModalForm.types';

const ModalForm: FC<IProps> = ({ children, formType }) => (
  <Container formType={formType}>{children}</Container>
);

export default ModalForm;
