declare module '@emotion/react' {
  export interface Theme extends ITheme {}
}

interface ITheme {
  colors: { [key: string]: string };
  shadows: { [key: string]: string };
  fontWeight: { [key: string]: number };
  fontSize: { [key: string]: number };
  padding: { [key: string]: number };
  borderRadius: { [key: string]: number };
  deskContainerWidth: number;
  primaryGap: number;
  transitionDurationAndFunc: string;
  spacing: (value?: number) => string;
  trimText: string;
}

const theme: ITheme = {
  colors: {
    primaryColor: '#3456FF',
    secondaryColor: '#4d5ae5',
    otherColor: '#38b6ff',
    otherLinkColor: '#44de6f',
    primaryFontColor: '#000000',
    secondaryFontColor: '#7c7c7c',
    otherFontColor: '#555',
    authPageBackgroundColor: 'rgba(46, 47, 66, 0.2)',
    authFormBackgroundColor: '#fcfcfc',
    btnBackgroundColor: 'rgba(217, 217, 217, 0.58)',
    whiteColor: '#fff',
    greyColor: '#808080',
    lightgreyColor: '#eee',
    redBtnColor: '#ff9192',
    blueBtnColor: '#7fd1ff',
    greenBtnColor: '#89f2a6',
    yellowBtnColor: '#f2e189',
    lightgreyBtnColor: '#d9d9d9',
    redIconColor: '#d3232f',
    blueIconColor: '#2681ed',
    greenIconColor: '#00c938',
    yellowIconColor: '#ffb422',
    lightgreyIconColor: '#555555',
    borderColor: 'rgba(137, 137, 137, 0.43)',
    contactPrimaryTextColor: '#636363',
    contactSecondaryTextColor: '#696969',
  },
  shadows: {
    primaryShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    secondaryShadow: '0px 4px 17px 0px rgba(0, 0, 0, 0.17)',
  },
  fontWeight: {
    primaryFontWeight: 500,
    secondaryFontWeight: 600,
    otherFontWeight: 400,
  },
  fontSize: {
    titleFontSize: 35,
    subtitleFontSize: 25,
    primaryFontSize: 16,
    secondaryFontSize: 18,
    otherFontSize: 20,
  },
  padding: {
    paddingContainer: 16,
    paddingAuthForm: 32,
  },
  borderRadius: {
    primaryBorderRadius: 4,
    secondaryBorderRadius: 8,
    otherBorderRadius: 30,
    navBarBorderRadius: 10,
  },
  deskContainerWidth: 1200,
  primaryGap: 20,
  transitionDurationAndFunc: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
  spacing: (value = 1) => `${value * 4}px`,
  trimText:
    'word-wrap: break-word; overflow: hidden; text-overflow: ellipsis; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical;',
};

export default theme;
