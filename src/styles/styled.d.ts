import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    accentColor: string;
    subAccentColor: string;
    header: {
      logo: string;
      themeBtn: string;
      textTitle: string;
    };
    nav: {
      text: string;
      line: string;
    };
    listTop: {
      text: string;
    };
    totalRank: {
      width: number;
      height: number;
      paddingTop: number;
      bottom: number;
      margin: string;
      padding: string;
      boxSizing: string;
      backrgoundColor: string;
      swiperNoActive: string;
      background: string;
      border: string;
      mainShadow: string;
      sideShadow: string;
    };
    listItem: {
      backgroundColor: string;
      line: string;
      textAuthor: string;
      textComment: string;
      btnComment: string;
      btnPoint: string;
      shadow: string;
    };
    modalBtn: string;
    textMenuColor: string;
    textAuthorColor: string;
    textCommentColor: string;
    listColor: string;
  }
}
