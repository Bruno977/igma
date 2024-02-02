import { PropsWithChildren, createContext, useContext, useState } from 'react';

type UserContextProps = {
  isAuthenticated: boolean;
  handleToggleAuthentication: () => void;
};
export const UserContext = createContext({} as UserContextProps);

export function UserContextProvider({ children }: PropsWithChildren) {
  const [toggleAuthentication, setToggleAuthentication] = useState(() => {
    const hasUserLocalStore = window.localStorage.getItem('isAuthenticated');
    if (hasUserLocalStore) {
      return true;
    } else {
      return false;
    }
  });

  function handleToggleAuthentication() {
    const hasUserLocalStore = window.localStorage.getItem('isAuthenticated');
    if (hasUserLocalStore) {
      window.localStorage.removeItem('isAuthenticated');
      setToggleAuthentication(false);
    } else {
      setToggleAuthentication(true);
      window.localStorage.setItem('isAuthenticated', JSON.stringify(true));
    }
  }
  return (
    <UserContext.Provider
      value={{
        isAuthenticated: toggleAuthentication,
        handleToggleAuthentication,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUserContext() {
  const context = useContext(UserContext);
  return context;
}
