import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GlobalStyle } from "../theme/globalStyle";
import { darkTheme, lightTheme } from "../theme/themes";
import { RiMoonClearLine } from "react-icons/Ri";
import { HiSun } from "react-icons/Hi";
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
            <RiMoonClearLine onClick={themeSwitcher} />
          </ThemeIcon>
        ) : (
          <ThemeIcon>
            <HiSun onClick={themeSwitcher} />
          </ThemeIcon>
        )}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
