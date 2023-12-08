import  IconBtnType  from 'constants/iconBtnType';
import theme from 'constants/theme';

const setIconHoverEffect = (btnType: IconBtnType) => {
  switch (btnType) {
    case IconBtnType.clearFilter:
      return;

    default:
      return theme.colors.secondaryColor;
  }
};

export default setIconHoverEffect;
