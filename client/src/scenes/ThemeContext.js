// import React from "react";
// import { createGlobalStyle, ThemeProvider } from 'styled';
// import {useThemeContext} from '../components/PortfolioLibrary/hooks/Hooks'

// const themeColours = {
//   light: {
//     color: "#343434",
//     backgroundColor: "#fefefe"
//   },
//   dark: {
//     color: "#fff",
//     backgroundColor: "#3f3f3f"
//   }
// };

// type ThemeName = "light" | "dark";
// type ThemeContextType = {
//   theme: ThemeName;
//   setTheme: (name: ThemeName) => void;
// };
// const ThemeContext = React.createContext(ThemeContextType);

// export const ThemeProvider = (props) => {
//   const [themeName, setThemeName] = useState("light");

//   useEffect(() => {
//     const darkOS = window.matchMedia("(prefers-color-scheme: dark)").matches;
//     setTheme(darkOS ? "dark" : "light");
//   }, []);

//   const setTheme = (themeName) => {
//     document.body.style.setProperty("--color", themeColours[name].color);
//     document.body.style.setProperty(
//       "--background-color",
//       themeColours[name].backgroundColor
//     );
//     setThemeName(name);
//   };
//   return (
//     <ThemeContext.Provider value={{ theme: themeName, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// export const useTheme = () => React.useContext(ThemeContext);
