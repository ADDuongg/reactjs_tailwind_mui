

import AboutUs from '../component/component_home1/aboutUs.tsx';
import Contact from '../component/component_home1/contact.tsx';
import MainServices from '../component/component_home1/mainServices.tsx';
import MainSlide from '../component/component_home1/mainSlide.tsx';
import OurTeam from '../component/component_home1/ourTeam.tsx';
import '../css/home1.css'
import Layout from '../layout/layout';

function Home1() {
  return (
    <Layout>
      <MainSlide/>
      <MainServices/>
      <AboutUs/>
      <OurTeam css={{}}/>
      <Contact css={{}} />
    </Layout>
  );
}

export default Home1;
