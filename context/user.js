import { createContext, useContext, useState } from "react";

const Context = createContext();

export function AuthUser({ children }) {
  const [user, setUser] = useState(null);
  return <Context.Provider value={[user, setUser]}>{children}</Context.Provider>;
}

export function useUserContext() {
  return useContext(Context);
}
