import { IconBtnType, theme } from 'constants/index';

const setIconHoverEffect = (btnType: IconBtnType) => {
  switch (btnType) {
    case IconBtnType.clearFilter:
      return;

    default:
      return theme.colors.secondaryColor;
  }
};

export default setIconHoverEffect;
