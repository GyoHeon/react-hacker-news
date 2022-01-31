import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor: string;
    textColor: string;
    textMenuColor: string;
    textAuthorColor: string;
    textCommentColor: string;
    accentColor: string;
    listColor: string;
  }
}
