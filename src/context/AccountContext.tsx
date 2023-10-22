import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";

type AccountProviderProps = {
  children: ReactNode;
};

type AccountContext = {
  isLoggedIn: boolean;
  isLoggingIn: boolean;
  updateIsLoggedIn: (newLoggedInState: boolean) => void;
  updateIsLoggingIn: (newLoggingInState: boolean) => void;
};

const AccountContext = createContext({} as AccountContext);

export function useAccountContext() {
  return useContext(AccountContext);
}

export function AccountProvider({ children }: AccountProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(false);

  function updateIsLoggedIn(newLoggedInState: boolean): void {
    setIsLoggedIn(newLoggedInState);
  }

  function updateIsLoggingIn(newLoggingInState: boolean): void {
    setIsLoggingIn(newLoggingInState);
  }

  return (
    <AccountContext.Provider
      value={{
        isLoggedIn,
        isLoggingIn,
        updateIsLoggedIn,
        updateIsLoggingIn,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
