import React from 'react';
import Layout from '../layout/layout';
import MainSlide from '../component/component_home2/mainSlide.tsx';
import '../css/home2.css'
import AboutUs from '../component/component_home2/aboutUs.tsx';
import MainServices from '../component/component_home2/mainServices.tsx';
import ChoosingUs from '../component/component_home2/choosingUs.tsx';
import LatestNew from '../component/component_home2/latestNew.tsx';
import Call from '../component/component_home2/call.jsx';
const Home2 = () => {
    return (
        <Layout>
            <MainSlide/>
            <AboutUs/>
            <MainServices/>
            <ChoosingUs/>
            <LatestNew/>
            <Call/>
        </Layout>
    );
}

export default Home2;
