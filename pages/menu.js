import Head from 'next/head'

import TopMenuBar from '../components/top-menu-bar'

export default function Menu() {
  return (
    <div>
      <Head>
        <title>Journeyer</title>
        <meta name="description" content="Journeyer of the Realms is a tabletop card-collecting strategy game developed by Paper Kiwi." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="sticky top-0">
        <TopMenuBar />
      </nav>
      <main className="h-screen flex flex-col justify-center">
      </main>
    </div>
  )
}
