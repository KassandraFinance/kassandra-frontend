import Head from 'next/head'
import NewHome from '../templates/NewHome'

export default function home() {
  return (
    <>
      <Head>
        <title>Kassandra Home Page</title>
      </Head>
      <NewHome />
    </>
  )
}
