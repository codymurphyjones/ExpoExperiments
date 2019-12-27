import React, { useContext, useState } from 'react';

const ThemeDefinitions = require('./themes.json');


const themes = ThemeDefinitions;
const theme = ThemeDefinitions[1];

const ThemeContext = React.createContext();


export const ThemeContextProvider = ({ children }) => {
	const [themeID, setThemeID] = useState(ThemeDefinitions[0].key);

  return (
    <ThemeContext.Provider value={{ themeID, setThemeID }}>
      {children}
    </ThemeContext.Provider>
  );
};


export function withTheme(Component) {
  return ({forwardedRef, ...props})  => {
    const { themeID, setThemeID } = useContext(ThemeContext);
    console.log(forwardedRef)
    const getTheme = themeID => ThemeDefinitions.find(theme => theme.key === themeID);
    const setTheme = themeID => setThemeID(themeID);

    return (
      <Component
        {...props}
        ref={forwardedRef}
        themes={ThemeDefinitions}
        theme={getTheme(themeID)}
        setTheme={setTheme}
      />
    );
  };
}
