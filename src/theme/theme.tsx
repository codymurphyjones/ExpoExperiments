import React, { useContext, useState } from 'react';

const ThemeDefinitions = require('../../themes.json');


const themes = ThemeDefinitions;
const theme = ThemeDefinitions[1];

const ThemeContext = React.createContext();


export const ThemeContextProvider = ({ children }) => {
	const [themeID, setThemeID] = useState(ThemeDefinitions[1].key);

	
  return (
    <ThemeContext.Provider value={{ themeID, setThemeID }}>
      {children}
    </ThemeContext.Provider>
  );
};


export function withTheme(Component) {
  return props => {
    const { themeID, setThemeID } = useContext(ThemeContext);

    const getTheme = themeID => ThemeDefinitions.find(theme => theme.key === themeID);
    const setTheme = themeID => setThemeID(themeID);

    return (
      <Component
        {...props}
        themes={ThemeDefinitions}
        theme={getTheme(themeID)}
        setTheme={setTheme}
      />
    );
  };
}
