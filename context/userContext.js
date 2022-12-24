// APIs
import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useMutation } from "../convex/_generated/react";

// Components
import Loading from "../components/index/loading.js";

const Context = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const storeUser = useMutation("user/storeUser");

  useEffect(() => {
    const createUser = async () => {
      const id = await storeUser();
      setUser(id);
    };
    createUser().catch(console.error);
    return () => setUser(null);
  }, [storeUser]);

  const userId = useMemo(() => user?.id, [user]);

  if (!userId) return <Loading />;

  return <Context.Provider value={userId}>{children}</Context.Provider>;
};

export const useUserContext = () => {
  return useContext(Context);
};
