import React from 'react';
import footerLogo from '../images/Footer Logo.png'

const Footer = () => {
    function handleToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    return (

        <section id="footer">
            <div className="bg-footer">
                <div className="wrapper">
                    <div className="divContentFooter">
                        <div className="divIcon">
                            <div><img src={footerLogo} alt="" /></div>
                            <div className="divDetailFooter">
                                <div style={{ display: 'flex', fontSize: '16px' }}>
                                    <p style={{ color: '#D7DBFF' }}>Beautice</p> is a Beauty Clinic WordPress Theme.
                                </div>
                                <div style={{ color: '#D7DBFF', marginTop: '15px', marginBottom: '5px' }}>
                                    Baker Steet 101, NY, United States.
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#D7DBFF' }}>
                                    <p>+521 569 8966.</p>
                                    <p>mail@company.com.</p>
                                </div>
                            </div>
                        </div>
                        <div className="footer-page">
                            <div style={{ color: 'white', fontSize: '23px' }}>Pages</div>
                            <ul className="ul-page">
                                <li><i className="fa-solid fa-caret-right"></i>Home</li>
                                <li><i className="fa-solid fa-caret-right"></i>About</li>
                                <li><i className="fa-solid fa-caret-right"></i>Service</li>
                                <li><i className="fa-solid fa-caret-right"></i>Gallery</li>
                                <li><i className="fa-solid fa-caret-right"></i>Team</li>
                            </ul>
                        </div>
                        <div className="footer-infor">
                            <div style={{ color: 'white', fontSize: '23px' }}>Informations</div>
                            <ul className="ul-page">
                                <li><i className="fa-solid fa-caret-right"></i>Terms & conditions</li>
                                <li><i className="fa-solid fa-caret-right"></i>Privacy policy</li>
                                <li><i className="fa-solid fa-caret-right"></i>Blog</li>
                                <li><i className="fa-solid fa-caret-right"></i>Contact</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{ textAlign: 'end' }} className="divBtnTop">
                        <button className="btnToTop" onClick={handleToTop}><i className="fa-solid fa-arrow-up"></i></button>
                    </div>

                    <div className="sociation">
                        <div className="iconFooter">
                            <i className="fa-brands fa-facebook text-white text-3xl"></i>
                            <i className="fa-brands fa-twitter text-white text-3xl"></i>
                            <i className="fa-brands fa-linkedin-in text-white text-3xl"></i>
                            <i className="fa-brands fa-youtube text-white text-3xl"></i>
                            <i className="fa-brands fa-instagram text-white text-3xl"></i>
                        </div>
                        <div className="copyright">
                            © AltDesain Studio 2021 - All right reserved.
                        </div>
                    </div>
                </div>

            </div>
            <div className="bottom-footer">

            </div>
        </section>

    );
}

export default Footer;
