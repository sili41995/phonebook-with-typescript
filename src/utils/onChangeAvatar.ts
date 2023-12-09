import { ChangeEvent, RefObject } from 'react';

const onChangeAvatar = ({
  e,
  ref,
}: {
  e: ChangeEvent<HTMLInputElement>;
  ref: RefObject<HTMLImageElement>;
}) => {
  if (e.target.files === null) {
    return;
  }

  const file = e.target.files[0];
  const reader = new FileReader();

  reader.onload = ((image) => (e) => {
    if (image) {
      image.src = e?.target?.result as string;
    }
  })(ref.current);
  reader.readAsDataURL(file);
};

export default onChangeAvatar;
