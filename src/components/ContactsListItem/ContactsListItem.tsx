import { AiFillStar, AiOutlineDelete } from 'react-icons/ai';
import IconButton from 'components/IconButton';
import LinkWithQuery from 'components/LinkWithQuery';
import { selectIsLoading } from 'redux/contacts/selectors';
import useDeleteContact from 'hooks/useDeleteContact';
import { useAppSelector } from 'hooks/redux';
import { IProps } from './ContactsListItem.types';
import { IconSizes, PagePaths, Positions } from 'constants/index';
import { IconBtnType } from 'constants/index';
import {
  Email,
  Image,
  Item,
  Role,
  Name,
  Phone,
  ContactInfo,
  Person,
  ImageContainer,
} from './ContactsListItem.styled';

const ContactsListItem = ({ contact }: IProps) => {
  const { avatar, name, _id: id, role, phone, email, favorite } = contact;
  const isLoading = useAppSelector(selectIsLoading);
  const deleteContact = useDeleteContact();
  const contactPath = `${id}/${PagePaths.contactPath}`;

  const handleDelBtnClick = () => {
    deleteContact(id as string);
  };

  return (
    <Item>
      <LinkWithQuery to={contactPath}>
        <ImageContainer>
          <Image src={avatar as string} alt={name} />
          {favorite && <AiFillStar size={IconSizes.primaryIconSize} />}
        </ImageContainer>
        <ContactInfo>
          <Person>
            <Name>{name}</Name>
            {role && <Role>{role}</Role>}
          </Person>
          <Phone>{phone}</Phone>
          <Email>{email}</Email>
        </ContactInfo>
      </LinkWithQuery>
      <IconButton
        position={Positions.absolute}
        disabled={isLoading}
        btnType={IconBtnType.deleteTransparent}
        onBtnClick={handleDelBtnClick}
        icon={<AiOutlineDelete size={IconSizes.primaryIconSize} />}
        height={36}
      />
    </Item>
  );
};

export default ContactsListItem;
