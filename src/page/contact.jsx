import React from 'react';
import Layout from '../layout/layout';
import ContactComponent from '../component/component_home1/contact.tsx'
import mapContact from '../images/mapContact.png';
import OurTeam from '../component/component_home1/ourTeam.tsx';
const Contact = () => {

    return (
        <Layout>
            <ContactComponent css={{ mt: 'mt-60' }} />
            <div className="w-full h-auto lg:mt-0 mt-98">
                <img src={mapContact} alt="" className='h-full w-full object-cover ' />
            </div>

            <div className='flex flex-col items-center mt-28'>
                <div className='text-colorPink font-bold'>Our Services</div>
                <div className='text-colorPurple font-bold text-4xl my-5'>Get direct handling by us</div>
                <div className='text-colorGray '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</div>
            </div>

            <div className="w-4/5 mx-auto lg:flex-row flex-col items-center flex justify-center mt-20">

                <div className={` text-center h-96 w-110 rounded-3xl`}>
                    <i class="fa-solid fa-location-dot text-colorPurple font-bold text-7xl my-14"></i>
                    <div className="divDetailTeam ">
                        <div className="card-title">
                            Address
                        </div>
                        <div className="card-subtitle">
                            101 Baker Street, NY
                        </div>
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </div>
                    </div>

                </div>
                <div className={`shadow-card text-center h-96 w-110 rounded-3xl`}>
                    <i class="fa-solid fa-phone text-colorPurple font-bold text-7xl my-14"></i>
                    <div className="divDetailTeam">
                        <div className="card-title">
                            Phone
                        </div>
                        <div className="card-subtitle">
                            +896 120 5889
                        </div>
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </div>
                    </div>

                </div>
                <div className={` text-center h-96 w-110 rounded-3xl`}>
                    <i class="fa-solid fa-envelopes-bulk text-colorPurple font-bold text-7xl my-14"></i>
                    <div className="divDetailTeam">
                        <div className="card-title">
                            Mail
                        </div>
                        <div className="card-subtitle">
                            mail@company.com
                        </div>
                        <div className="card-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    );
}

export default Contact;
