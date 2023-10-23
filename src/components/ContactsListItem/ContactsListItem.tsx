import { AiOutlineDelete } from 'react-icons/ai';
import IconButton from 'components/IconButton';
import LinkWithQuery from 'components/LinkWithQuery/LinkWithQuery';
import { getContactInfo } from 'utils';
import { useDeleteContact } from 'hooks';
import {
  Email,
  Image,
  Item,
  Role,
  Name,
  Phone,
  ContactInfo,
  Person,
} from './ContactsListItem.styled';
import { selectIsLoading } from 'redux/contacts/selectors';
import { useAppSelector } from 'hooks/redux';
import { IProps } from './ContactsListItem.types';
import { PagesPath } from 'constants/pagesPath';
import { IconBtnType } from 'constants/iconBtnType';

const ContactsListItem = ({ contact }: IProps) => {
  const { userAvatar, name, id, role, number, email } = getContactInfo(contact);
  const isLoading = useAppSelector(selectIsLoading);
  const deleteContact = useDeleteContact();
  const path = `${PagesPath.contactDetailsPath}/${id}/${PagesPath.contactPath}`;

  const handleDelBtnClick = () => {
    if (id) {
      deleteContact(id);
    }
  };

  return (
    <Item>
      <LinkWithQuery to={path}>
        <Image src={userAvatar} alt={name} />
        <ContactInfo>
          <Person>
            <Name>{name}</Name>
            <Role>{role}</Role>
          </Person>
          <Phone>{number}</Phone>
          <Email>{email}</Email>
        </ContactInfo>
      </LinkWithQuery>
      <IconButton
        top={0}
        right={0}
        position="absolute"
        disabled={isLoading}
        btnType={IconBtnType.deleteTransparent}
        width={44}
        height={35}
        onBtnClick={handleDelBtnClick}
      >
        <AiOutlineDelete />
      </IconButton>
    </Item>
  );
};

export default ContactsListItem;
