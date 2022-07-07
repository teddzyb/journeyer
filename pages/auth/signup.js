import Head from 'next/head'

export default function Signup() {
  return (
    <div>
      <Head>
        <title>Journeyer Auth</title>
        <meta name="description" content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col justify-center">
        <div className="flex justify-center">
          <form action="" method="post" className="flex flex-col rounded-2xl shadow-lg bg-black/[.15] w-[450px] py-12 px-10">
            <div className="flex flex-col justify-center mb-10">
              <p className="text-4xl font-bold text-center drop-shadow-md select-none">JOURNEYER<br />
                <span className="text-xl">OF THE REALMS</span>
              </p>
            </div>
            <div className="grid grid-rows-4 grid-cols-1 gap-6">
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="block shadow-sm rounded-sm mt-1 
                  bg-black/[.15] border-transparent focus:border-transparent w-full focus:ring-white/[.15] focus:invalid:ring-orange-700" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block shadow-sm rounded-sm mt-1 
                  bg-black/[.15] border-transparent focus:border-transparent w-full focus:ring-white/[.15] invalid:border-orange-700" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="block shadow-sm rounded-sm mt-1 
                  bg-black/[.15] border-transparent focus:border-transparent w-full focus:ring-white/[.15]" />
              </div>
              <div>
                <label htmlFor="confPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confPassword"
                  name="confPassword"
                  className="block shadow-sm rounded-sm mt-1 
                  bg-black/[.15] border-transparent focus:border-transparent w-full focus:ring-white/[.15]" />
              </div>
            </div>
            <div className="text-center mt-8">
              <button type="submit" className="btn-primary rounded-sm drop-shadow-md py-3 w-full">Create Account</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
