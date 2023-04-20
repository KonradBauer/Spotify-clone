import {createGlobalStyle} from "styled-components";

export const theme = {
    color: {
        codGray: "#121212",
        black: "#000000"
    },

    breakpoints: {
        theSmallestMobileView: 290,
        mobileS: 320,
        mobileM: 425,
        mobileMax: 847,
        tabletVerticalMax: 991,
        beforeMobileMax: 1000,
        tabletHorizontalMax: 1199,
        desktopHorizontal: 1250,
        desktopHorizontalMax: 1672,
    },
};

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

    *, ::after, ::before {
      box-sizing: inherit;
    }

    body {

      margin: 0;
    }
`;