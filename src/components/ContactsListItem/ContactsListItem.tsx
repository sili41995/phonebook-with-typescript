import { AiOutlineDelete } from 'react-icons/ai';
import IconButton from 'components/IconButton';
import LinkWithQuery from 'components/LinkWithQuery';
// import { getContactInfo } from 'utils';
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
import { IconSizes, PagePaths, Positions } from 'constants/index';
import { IconBtnType } from 'constants/index';

const ContactsListItem = ({ contact }: IProps) => {
  const { avatar, name, _id: id, role, phone, email } = contact;
  const isLoading = useAppSelector(selectIsLoading);
  const deleteContact = useDeleteContact();
  const contactPath = `${id}/${PagePaths.contactPath}`;

  const handleDelBtnClick = () => {
    deleteContact(id);
  };

  return (
    <Item>
      <LinkWithQuery to={contactPath}>
        <Image src={avatar} alt={name} />
        <ContactInfo>
          <Person>
            <Name>{name}</Name>
            <Role>{role}</Role>
          </Person>
          <Phone>{phone}</Phone>
          <Email>{email}</Email>
        </ContactInfo>
      </LinkWithQuery>
      <IconButton
        top={0}
        right={0}
        position={Positions.absolute}
        disabled={isLoading}
        btnType={IconBtnType.deleteTransparent}
        width={44}
        height={35}
        onBtnClick={handleDelBtnClick}
        icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />}
      />
    </Item>
  );
};

export default ContactsListItem;
