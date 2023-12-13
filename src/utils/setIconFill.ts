import { theme, IconBtnType } from 'constants/index';

function setIconFill(btnType: IconBtnType): string {
  switch (btnType) {
    case IconBtnType.delete:
      return theme.colors.redIconColor;

    case IconBtnType.edit:
      return theme.colors.blueIconColor;

    case IconBtnType.phone:
      return theme.colors.greenIconColor;

    case IconBtnType.message:
      return theme.colors.yellowIconColor;

    case IconBtnType.chat:
      return theme.colors.blueIconColor;

    case IconBtnType.logout:
      return theme.colors.redIconColor;

    case IconBtnType.accept:
      return theme.colors.greenIconColor;

    case IconBtnType.cancel:
      return theme.colors.redIconColor;

    case IconBtnType.deleteTransparent:
      return theme.colors.redIconColor;

    case IconBtnType.toggleShowPassword:
      return theme.colors.primaryColor;

    case IconBtnType.clearFilter:
      return theme.colors.whiteColor;

    default:
      return theme.colors.lightgreyIconColor;
  }
}

export default setIconFill;
