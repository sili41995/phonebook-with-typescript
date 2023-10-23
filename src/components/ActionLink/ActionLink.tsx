import { MouseEvent } from 'react';
import { Link } from './ActionLink.styled';
import { IProps } from './ActionLink.types';
import { makeBlur } from 'utils';

const ActionLink = ({ link, children, btnType }: IProps) => {
  const onBtnClick = (e: MouseEvent<HTMLAnchorElement>) => {
    makeBlur(e.currentTarget);
  };

  return (
    <Link btnType={btnType} href={link} onClick={onBtnClick}>
      {children}
    </Link>
  );
};

export default ActionLink;
