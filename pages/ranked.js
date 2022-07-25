// APIs
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

// Components
import TopMenuBar from '../components/top-menu-bar'

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

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
        <div className="flex flex-col items-center bg-translucent rounded-2xl shadow-md overflow-hidden w-2/5 m-10 mr-5">

        </div>
        <div className="flex bg-translucent rounded-2xl shadow-md w-3/5 m-10 ml-5">

        </div>
      </main>
    </div>
  )
}
