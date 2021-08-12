import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { GlobalStyle } from "../theme/globalStyle";
import { darkTheme, lightTheme } from "../theme/themes";
import { RiMoonClearLine } from "react-icons/Ri";
import { HiSun } from "react-icons/Hi";

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
          <RiMoonClearLine id="ThemeIcon" onClick={themeSwitcher} />
        ) : (
          <HiSun id="ThemeIcon" onClick={themeSwitcher} />
        )}
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
