import React, { useState } from 'react';

export const InterfaceContext = React.createContext();

const InterfaceProvider = ({ children }) => {
  const [searchVisibility, setSearchVisibility] = useState(false);

  const showSearch = () => setSearchVisibility(true);
  const hideSearch = () => setSearchVisibility(false);

  return (
    <InterfaceContext.Provider
      value={{ showSearch, hideSearch, searchVisibility }}
    >
      { children }
    </InterfaceContext.Provider>
  );
};

export default InterfaceProvider;
