// APIs
import { createContext, useContext, useState, useEffect } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

// Components
import Loading from "../components/index/loading.js";

const Context = createContext();

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const storeUser = useMutation("user/storeUser");
  const getIntro = useQuery("user/getIntro", user);
  useQuery("user/getUser", user);

  useEffect(() => {
    const createUser = async () => {
      const id = await storeUser();
      setUser(id);
    };
    createUser().catch(console.error);
    return () => setUser(null);
  }, [storeUser]);

  if (!user) return <Loading />;
  if (getIntro === undefined) return <Loading />;

  return <Context.Provider value={user}>{children}</Context.Provider>;
};

export const useUserContext = () => {
  return useContext(Context);
};
