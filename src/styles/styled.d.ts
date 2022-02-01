import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
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
    textMenuColor: string;
    textAuthorColor: string;
    textCommentColor: string;
    accentColor: string;
    listColor: string;
  }
}
