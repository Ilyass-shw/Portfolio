import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./themes";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    ${({ theme }) => `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html, body {
        height: 100vh;
    }


    html {
        scroll-behaviour: smooth;
    }

    body {
        width:100%;
        background: ${theme.colors.background};
        color: ${theme.colors.text};
        font-family: ${theme.fonts.text};
        line-height: ${theme.lineHeights.body};
        display: block;
        transition: background 0.3s ease;
    }

    `}
    #ThemeIcon{
    display: inline-flex;
    width: 1.6rem;
    height: auto;
    position: absolute;
    top: 1.65rem;
    right: 2rem;
    cursor: pointer;

    @media (min-width: ${(p) => p.theme.screens.sm}) {
    top: 3.4rem;
    right: 3rem;
  }
    @media (min-width: ${(p) => p.theme.screens.md}) {
    right: 6rem;
  }
    @media (min-width: ${(p) => p.theme.screens.lg}) {
    right: 8rem;
  }
    }
`;
