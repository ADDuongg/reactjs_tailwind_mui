import React from 'react';
import '../css/all.css'
import '../css/responsive.css'

import Footer from '../component/footer.tsx';
import Header from '../component/header.tsx';
const Layout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;
