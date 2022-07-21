import Head from 'next/head'
import Link from 'next/link'
import { useUserContext } from '/context/user'

export default function Login() {
  const [user, setUser] = useUserContext()

  const handleSubmit = async event => {
    event.preventDefault()

    const data = {
      email: event.target.email.value,
    }

    const JSONdata = JSON.stringify(data)
    const endpoint = '../api/login'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()

    setUser(result.email)

    // TODO: save to cookie
  }

  return (
    <div>
      <Head>
        <title>Journeyer Auth</title>
        <meta name="description" content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <form onSubmit={handleSubmit} className="grid auto-rows-auto grid-cols-1 gap-10 max-w-xs w-full">
            <div className="flex flex-col justify-center">
              <p className="text-5xl font-bold text-center drop-shadow-md select-none">JOURNEYER<br />
                <span className="text-2xl">OF THE REALMS</span>
              </p>
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
                focus:bg-translucent focus:border-transparent w-full focus:ring-white/[.15] mb-4"
              />
              <Link href="">
                <a className="text-sm underline text-teal-300">Forgot Password?</a>
              </Link>
            </div>
            <div className="flex flex-col text-center gap-3">
              {/* {user ? <span>You are logged in as {user}</span> : <span>Please log in</span>} */}
              <button type="submit" className="btn-primary py-3 w-full">Sign In</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
