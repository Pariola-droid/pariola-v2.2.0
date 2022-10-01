import Head from 'next/head';

//Basic component import
import Navbar from '../components/general/Navbar';
import Footer from '../components/general/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pariola - Creative Frontend Engineer</title>
      </Head>

      <Navbar />
      <main></main>
      <Footer />
    </div>
  );
}
