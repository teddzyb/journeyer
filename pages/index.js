// APIs
import Head from "next/head";
import Router from "next/router";
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";
import { useQuery } from "../convex/_generated/react";

// Components
import Menu from "../components/index/menu";
import Introduction from "../components/index/introduction";
import Loading from "../components/index/loading";

const Index = () => {
  const user = useUserContext();
  const { introCompleted, usernameSet } = useQuery("user/getIntro", user) || {};

  useEffect(() => {
    if (!introCompleted && usernameSet) {
      Router.push("/match/tutorial");
    }
  }, [introCompleted, usernameSet]);

  return (
    <>
      <Head>
        <title>Journeyer</title>
        <meta
          name="description"
          content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {introCompleted ? <Menu /> : <>{!usernameSet && <Introduction />}</>}
      <Menu />
    </>
  );
};

export default Index;
