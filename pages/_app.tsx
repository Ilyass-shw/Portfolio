import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GlobalStyle } from "../theme/globalStyle";
import { darkTheme, lightTheme } from "../theme/themes";
import { Icon } from "@iconify/react";
import { ThemeIcon } from "../components/ThemeIcon/ThemeIcon.component";

export default function App({ Component, pageProps }: AppProps) {
  const [storedTheme, setStoredTheme] = useLocalStorage();

  const themeSwitcher = () => {
    storedTheme === "light" ? setStoredTheme("dark") : setStoredTheme("light");
  };

  return (
    <>
      <ThemeProvider theme={storedTheme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyle />
        {storedTheme === "dark" ? (
          <ThemeIcon>
            <Icon icon="bi:moon-stars" width="1" onClick={themeSwitcher} />
          </ThemeIcon>
        ) : (
          <ThemeIcon>
            <Icon
              icon="akar-icons:sun-fill"
              width="1"
              onClick={themeSwitcher}
            />
          </ThemeIcon>
        )}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
