import { FC } from 'react';
import { IProps } from './ModalForm.types';
import { Container } from './ModalForm.styled';

const ModalForm: FC<IProps> = ({ children, formType }) => (
  <Container formType={formType}>{children}</Container>
);

export default ModalForm;
