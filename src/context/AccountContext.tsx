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
  user: User;
  updateIsLoggedIn: (newLoggedInState: boolean) => void;
  updateIsLoggingIn: (newLoggingInState: boolean) => void;
  updateUser: (newLoggingInState: User) => void;
};

export interface User {
  username: string;
  email: string;
  password: string;
}

const AccountContext = createContext({} as AccountContext);

export function useAccountContext() {
  return useContext(AccountContext);
}

const initialValues: User = {
  username: "",
  email: "",
  password: "",
}

export function AccountProvider({ children }: AccountProviderProps) {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true);
  const [user, setUser] = useState<User>(initialValues);

  function updateIsLoggedIn(newLoggedInState: boolean): void {
    setIsLoggedIn(newLoggedInState);
  }

  function updateIsLoggingIn(newLoggingInState: boolean): void {
    setIsLoggingIn(newLoggingInState);
  }

  function updateUser(newUserValues: User): void {
    setUser(newUserValues);
  }

  return (
    <AccountContext.Provider
      value={{
        isLoggedIn,
        isLoggingIn,
        user,
        updateIsLoggedIn,
        updateIsLoggingIn,
        updateUser
      }}
    >
      {children}
    </AccountContext.Provider>
  );
}
