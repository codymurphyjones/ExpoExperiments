import React, { useContext, useState } from 'react';


const UserContext = React.createContext();

let userObject = {
  name: "Cody Jones",
  handle: "mager1794"
}



export const UserContextProvider = ({ children }) => {
	const [user, setUser] = useState(userObject);

	
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};


export function withUser(Component) {
  return (props)  => {
    const { user, setUser } = useContext(UserContext);
    function Test(userData) {
      setUser(userData);
    }

    return (
      <Component
        {...props}
        User={user}
        setUser={Test}
      />
    );
  };
}
