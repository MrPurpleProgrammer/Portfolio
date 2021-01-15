import { theme } from 'highcharts';
import { useState, useEffect } from 'react';

export const useThemeContext = () => {
    const [themeName, setThemeName] = useState('light')
    const themeColours = {
        light: {
          color: "#343434",
          backgroundColor: "#fefefe"
        },
        dark: {
          color: "#fff",
          backgroundColor: "#09183c"
        }
      };
      
    const setTheme = (name) => {
        document.body.style.setProperty("--color", themeColours[name].color);
        document.body.style.setProperty(
          "--background-color",
          themeColours[name].backgroundColor
        );
        setThemeName(name);
      };

    useEffect(() => {
        setTheme(themeName ? "dark" : "light");
    }, []);

    return [themeName, setThemeName];
}
