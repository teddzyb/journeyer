import Head from 'next/head'
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
        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col rounded-2xl shadow-lg bg-translucent w-96 py-12 px-10">
            <div className="flex flex-col justify-center mb-10">
              <p className="text-4xl font-bold text-center drop-shadow-md select-none">JOURNEYER<br />
                <span className="text-xl">OF THE REALMS</span>
              </p>
            </div>
            {user ? <span className="text-center mb-3">You are logged in as {user}</span> : <span className="text-center mb-3">Please log in</span>}
            <div className="grid grid-rows-2 grid-cols-1">
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block shadow-sm rounded-sm mt-1 
                  bg-translucent border-transparent focus:border-transparent w-full focus:ring-white/[.15] invalid:border-orange-700" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="block shadow-sm rounded-sm mt-1 
                  bg-translucent border-transparent focus:border-transparent w-full focus:ring-white/[.15]" />
                <button className="text-sm underline text-teal-300 mt-3">Forgot Password?</button>
              </div>
            </div>
            <div className="text-center mt-8">
              <button type="submit" className="btn-primary py-3 w-full">Sign In</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}
