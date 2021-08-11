import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const theme =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("theme") as string)
      : "dark";

  const [storedTheme, setStoredTheme] = useState(theme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(storedTheme));
  }, [storedTheme]);

  return [storedTheme, setStoredTheme];
};
