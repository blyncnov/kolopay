import Head from 'next/head'

// Components
import Header from '../components/Header'
import How from '../components/How'
import WhyKolopay from '../components/Why'
import DownloadOurApp from '../components/DownloadOurApp'
import LetsHelpYou from '../components/LetsHelpYou'


export default function Home() {
  return (
    <>
      <Head>
          <title>KoloPay - Mobile Kolo/PiggyBank to help you save your money</title>
        <meta name="description" content="Xdome ToDo Application by blyncnov" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <How />
      <WhyKolopay />
      <DownloadOurApp />
      <LetsHelpYou/>
    </>
  )}
