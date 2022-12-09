import Head from "next/head";

export default function Signup() {
  return (
    <div>
      <Head>
        <title>Journeyer Auth</title>
        <meta
          name="description"
          content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <form className="grid auto-rows-auto grid-cols-1 gap-8 max-w-xs w-full">
            <div className="flex flex-col justify-center">
              <p className="text-5xl font-bold text-center drop-shadow-md select-none">
                JOURNEYER
                <br />
                <span className="text-2xl">OF THE REALMS</span>
              </p>
            </div>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                required
                className="block shadow-sm rounded-sm bg-translucent/10 border-translucent 
                focus:bg-translucent focus:border-transparent w-full focus:ring-white/[.15]"
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="block shadow-sm rounded-sm bg-translucent/10 border-translucent 
                focus:bg-translucent focus:border-transparent w-full focus:ring-white/[.15] invalid:border-orange-700"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="block shadow-sm rounded-sm bg-translucent/10 border-translucent 
                focus:bg-translucent focus:border-transparent w-full focus:ring-white/[.15]"
              />
            </div>
            <div>
              <label htmlFor="confPassword">Confirm Password</label>
              <input
                type="password"
                id="confPassword"
                name="confPassword"
                required
                className="block shadow-sm rounded-sm bg-translucent/10 border-translucent 
                focus:bg-translucent focus:border-transparent w-full focus:ring-white/[.15]"
              />
            </div>
            <div className="flex flex-col text-center gap-3">
              <button type="submit" className="btn-primary py-3 w-full">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
