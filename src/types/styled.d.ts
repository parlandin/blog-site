import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      primary: string;
      primaryAlt: string;
      secondary: string;
      tertiary: string;
      background: string;
      text: string;
      hoverText: string;
      hover: string;
    };
  }
}
