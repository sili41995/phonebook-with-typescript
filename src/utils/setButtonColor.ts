import { IconBtnType, theme } from 'constants/index';

function setButtonColor(btnType: IconBtnType): string {
  switch (btnType) {
    case IconBtnType.delete:
      return theme.colors.redBtnColor;

    case IconBtnType.edit:
      return theme.colors.blueBtnColor;

    case IconBtnType.phone:
      return theme.colors.greenBtnColor;

    case IconBtnType.message:
      return theme.colors.yellowBtnColor;

    case IconBtnType.favorite:
      return theme.colors.yellowBtnColor;

    case IconBtnType.chat:
      return theme.colors.blueBtnColor;

    case IconBtnType.logout:
      return theme.colors.redBtnColor;

    case IconBtnType.accept:
      return theme.colors.greenBtnColor;

    case IconBtnType.cancel:
      return theme.colors.redBtnColor;

    case IconBtnType.deleteTransparent:
      return 'transparent';

    case IconBtnType.toggleShowPassword:
      return 'transparent';

    case IconBtnType.clearFilter:
      return 'transparent';

    default:
      return theme.colors.lightgreyBtnColor;
  }
}

export default setButtonColor;
