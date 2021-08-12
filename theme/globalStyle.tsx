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
    top: 3.5rem;
    right: 2rem;
    cursor: pointer;

    @media (min-width: ${(p) => p.theme.screens.sm}) {
    top: 3.6rem;
    right: 15%;
  }
    @media (min-width: ${(p) => p.theme.screens.md}) {
    top: 4.3rem;
  }
    @media (min-width: ${(p) => p.theme.screens.lg}) {
    right: 10.5rem;
    top: 4rem;
  }
  }

    main{
    display: flex;
    flex-direction: column;
    padding: 30px 0;

    @media (max-width: ${(p) => p.theme.screens.lg}) {
    align-items: center;
    max-width: ${(p) => p.theme.screens.lg};
    }
    }
`;
