// APIs
import Head from 'next/head'

// Components
import TopMenuBar from '../components/top-menu-bar'

// Assets

export default function Campaign() {
  return (
    <div>
      <Head>
        <title>Journeyer</title>
        <meta name="description" content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="sticky top-0 z-50">
        <TopMenuBar />
      </nav>
      <main className="h-screen flex flex-row justify-center pb-20">
        <div className="flex flex-col items-center w-[45%] m-10 mr-5">
        </div>
        <div className="flex w-[55%] m-10 ml-5">
          <div className="flex justify-center items-center grow bg-translucent text-teal-300 rounded-xl">
            [Interactive Map]
          </div>
        </div>
      </main >
    </div >
  )
}
