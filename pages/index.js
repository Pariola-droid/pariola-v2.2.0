import Head from 'next/head';

//Basic component import
import Navbar from '../components/general/Navbar';
// ::: Main component
import Header from '../components/home/Header';
import About from '../components/home/About';
import Caption from '../components/home/Caption';
import Experience from '../components/home/Experience';
import Projects from '../components/home/Projects';
// ::: Main component
import Footer from '../components/general/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pariola - Creative Frontend Engineer</title>
      </Head>

      <Navbar />
      <main>
        <Header />
        <About />
        <Caption />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
