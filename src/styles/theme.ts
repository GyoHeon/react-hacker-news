import { DefaultTheme } from "styled-components";

export const whiteTheme: DefaultTheme = {
  backgroundColor: "#ffffff",
  textColor: "#111111",
  accentColor: "#FF6600",
  header: {
    logo: "image/DarkLogo.png",
    themeBtn: "image/toDarkTheme.png",
    textTitle: "#505050",
  },
  nav: {
    text: "#767676",
    line: "#F0F0F6",
  },
  totalRank: {
    width: 200,
    height: 300,
    paddingTop: 54,
    bottom: 16,
    margin: "0 54px 36px 87px",
    padding: "64px 20px 16px 20px",
    boxSizing: "border-box",
    backrgoundColor: "#F2F3F7",
    swiperNoActive: "#E5E5EC",
    background:
      "background: linear-gradient(158.71deg, #E8EBF2 2.84%, #F2F3F7 97.53%);",
    border: "1px solid rgba(255, 255, 255, 0.5);",
    mainShadow: "10px 10px 30px rgba(15, 41, 107, 0.12)",
    sideShadow: " -10px -10px 20px #ffffff",
  },
  listTop: {
    text: "#999999",
  },
  listItem: {
    backgroundColor: "#FFFFFF",
    line: "#F0F0F6",
    textAuthor: "#767676",
    textComment: "#505050",
    btnComment: "image/darkPoint.png",
    btnPoint: "image/darkComment.png",
    shadow: "0px 2px 12px rgba(0, 0, 0, 0.08)",
  },
  textMenuColor: "#999999",
  textAuthorColor: "#767676",
  textCommentColor: "#505050",
  listColor: "#F0F0F6",
};

export const darkTheme: DefaultTheme = {
  backgroundColor: "#222325",
  textColor: "#ffffff",
  accentColor: "#f15e2f",
  header: {
    logo: "image/WhiteLogo.png",
    themeBtn: "image/toWhiteTheme.png",
    textTitle: "#CFCFCF",
  },
  nav: {
    text: "#999999",
    line: "#404040",
  },
  totalRank: {
    width: 220,
    height: 320,
    paddingTop: 43,
    bottom: 25,
    margin: "0 77px 25px 76px",
    padding: "75px 31px 24px 31px",
    boxSizing: "content-box",
    backrgoundColor: "#2F3137",
    swiperNoActive: "#1D1D1D",
    background:
      "linear-gradient(155.9deg, #2E3137 2.23%, #2D3034 2.24%, #2F3237 97.65%, #2F3137 97.65%)",
    border: "1px solid rgba(80, 88, 91, 0.15)",
    mainShadow: "inset 10px 10px 30px rgba(19, 19, 20, 0.5)",
    sideShadow: "inset -10px -10px 30px rgba(82, 87, 95, 0.5)",
  },
  listTop: {
    text: "#767676",
  },
  listItem: {
    backgroundColor: "#2F3235",
    line: "#404040",
    textAuthor: "#999999",
    textComment: "#CFCFCF",
    btnComment: "image/whitePoint.png",
    btnPoint: "image/whiteComment.png",
    shadow: "0px 2px 16px rgba(0, 0, 0, 0.2)",
  },
  textMenuColor: "#999999",
  textAuthorColor: "#919191",
  textCommentColor: "#CFCFCF",
  listColor: "#F0F0F6",
};
