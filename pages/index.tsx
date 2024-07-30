import { useEffect } from 'react';
import Layout from '../layout/Layout';
// Main component
import Header from '../components/home/Header';
import About from '../components/home/About';
import Caption from '../components/home/Caption';
import Experience from '../components/home/Experience';
import Projects from '../components/home/Projects';
import Contact from '../components/home/Contact';
import scroll from 'animations/scroll';

export default function Home() {
  useEffect(() => {
    scroll();
  }, []);

  return (
    <Layout>
      <Header />
      <About />
      <Caption />
      <Experience />
      <Projects />
      <Contact />
    </Layout>
  );
}
