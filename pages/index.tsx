import Head from 'next/head';

//Basic component import
import Navbar from '../components/general/Navbar';
// ::: Main component
import Header from '../components/home/Header';
import About from '../components/home/About';
import Caption from '../components/home/Caption';
import Experience from '../components/home/Experience';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';
// ::: Main component
import Footer from '../components/general/Footer';
import Layout from '../layout/Layout';

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <main>
        <Header />
        <About />
        <Caption />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </Layout>
  );
}
