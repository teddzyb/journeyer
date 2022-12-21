import { createContext, useContext, useState, useMemo } from "react";

const Context = createContext();

export const AuthUser = ({ children }) => {
  const [user, setUser] = useState(null);
  const authUser = useMemo(() => [user, setUser], [user]);
  return <Context.Provider value={authUser}>{children}</Context.Provider>;
};

export const useUserContext = () => {
  return useContext(Context);
};
