import React from 'react';
import Layout from '../layout/layout';
import picVideo from '../images/pivVideo.png'
import OurTeam from '../component/component_home1/ourTeam.tsx';
import bgAbout from '../images/bgAbout.png'
import picAbout1 from '../images/picAbout1.png'
import picAbout2 from '../images/picAbout2.png'
import bg3 from '../images/bgAbout3.png'
import AboutUs from '../component/component_home2/aboutUs.tsx';
import imgAbout2 from '../images/aboutus2.png'
import LOGO1 from '../images/LOGO1.png'
import LOGO2 from '../images/LOGO2.png'
import LOGO3 from '../images/LOGO3.png'
import LOGO4 from '../images/LOGO4.png'
import LOGO5 from '../images/LOGO5.png'
const About = () => {
    const apiAboutUs = {
        title: "Our Vision",
        subTitle: "Be the best and go international",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero",
        subContent: "Nunc, ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse placerat.",
    }
    const logo = [`${LOGO1}`,`${LOGO2}`,`${LOGO3}`,`${LOGO4}`,`${LOGO5}`]
    return (
        <Layout>

            <div className="flex flex-col items-start w-4/5 mx-auto h-auto mt-60">
                <div className="contentAbout pl-16">
                    <div className='text-colorPink text-lg font-bold md:text-start text-center'>About</div>
                    <div className='text-colorPurple text-4xl font-bold md:w-2/3 w-full md:text-start text-center my-7'>We are a leading beauty clinic that has been around since 2002</div>
                    <div className='text-colorGray text-lg w-3/5 md:text-start text-center md:w-auto w-full'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</div>
                </div>
                
                <img src={picVideo} alt="" className='w-full h-full md:ml-0 ml-10 ' />
                
            </div>
            <div className=' w-full'>
                <div className='divBg'>

                </div>
                <OurTeam />
                {/* <div id="our-team1">ssssss</div> */}
            </div>

            <div className="w-full relative md:h-auto h-96">
                <div className='bg2'></div>
                <img src={picAbout1} alt="" className='min-w-full md:h-auto h-full' />
                <div className='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 text-white'>
                    <div className='text-colorPurple_200 font-bold text-center'>Business Slogan</div>
                    <div className='text-center font-bold text-4xl w-5/6 mx-auto my-4'>Best responsibility and service
                        for our customers</div>
                    <div className='text-center w-5/6 mx-auto my-4 text-colorGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</div>
                </div>
            </div>


            <div className="w-full h-full relative mb-32">
                <img src={bg3} alt="" className='object-cover opacity-70' />
                <div className='absolute top-0 text-white z-50 w-full h-auto'>
                    <section id="" className='w-full mx-auto md:h-96 h-auto mb-5'>

                        <div className=" md:flex-row md:justify-center mt-32 w-full flex-col flex items-center">
                            <img src={imgAbout2} alt="" className="w-3/12" />
                            <div className="contentAboutUs h-full md:pl-60 pl-0 mt-4">
                                <div className="title">{apiAboutUs.title}</div>
                                <div className="text-colorPurple font-bold w-11/12 lg:text-3xl my-4 text-lg lg:text-start text-center">{apiAboutUs.subTitle}</div>
                                <div className="content lg:text-3xl my-4 text-lg lg:text-start text-center">{apiAboutUs.content}</div>
                                <div className="content mt-5 lg:text-3xl my-4 text-lg lg:text-start text-center">{apiAboutUs.subContent}</div>
                            </div>


                        </div>
                    </section>
                </div>

                <div className='absolute top-96 text-white z-50 w-full h-auto'>
                    <section id="" className='w-full mx-auto md:h-96 h-auto mb-5'>

                        <div className=" md:flex-row md:justify-center mt-32 w-full flex-col flex items-center">
                            <div className="contentAboutUs h-full ">
                                <div className="title">{apiAboutUs.title}</div>
                                <div className="text-colorPurple font-bold w-11/12 lg:text-3xl my-4 text-lg lg:text-start text-center">{apiAboutUs.subTitle}</div>
                                <div className="content lg:text-3xl my-4 text-lg lg:text-start text-center">{apiAboutUs.content}
                                    
                                </div>
                                <div className="content mt-5 lg:text-3xl my-4 text-lg lg:text-start text-center">{apiAboutUs.subContent}</div>
                            </div>
                            <img src={picAbout2} alt="" className="w-3/12" />


                        </div>
                    </section>
                </div>

                <div className='absolute  z-50 w-full h-auto' style={{top: '56rem'}}>
                    <div className='flex flex-col items-center'>
                        <div className='text-colorPink font-bold'>Our Client</div>
                        <div className='font-bold text-colorPurple text-4xl'>Well-known agencíe</div>
                        <div className='text-colorGray font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                    </div>

                    <div className="flex w-4/6 mx-auto justify-between mt-16">
                        {logo.map((item,index) => (
                            <img key={index} src={item} alt="" />
                        ))}
                    </div>
                </div>
            </div>





        </Layout >
    );
}

export default About;
