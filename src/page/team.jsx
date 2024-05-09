import React, { useState } from 'react';
import Layout from '../layout/layout';
import bgTeam from '../images/bgTeam.png';
import OurTeam from '../component/component_home1/ourTeam.tsx';
import picTeam1 from '../images/picTeam1.png';
import picTeam2 from '../images/picTeam2.png';
import picTeam3 from '../images/picTeam3.png';
import bgTeam1 from '../images/bgTeam1.png';
import bgTeam2 from '../images/bgTeam2.png';
import avatarTeam1 from '../images/avatarTeam1.png';
import avatarTeam2 from '../images/avatarTeam2.png';
import avatarTeam3 from '../images/avatarTeam3.png';
const Team = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === dataAvatar.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? dataAvatar.length - 1 : currentSlide - 1);
    };
    const dataTeam = [
        {
            img: picTeam1,
            title: 'Lina Gustav',
            subTitle: 'Pharmacist',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.'
        },
        {
            img: picTeam2,
            title: 'Adam White',
            subTitle: 'Finance',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.'
        },
        {
            img: picTeam3,
            title: 'Jane Doe',
            subTitle: 'Marketer',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id magnis at placerat pulvinar euismod neque.'
        }
    ]
    const dataHome2 = {
        title: "Customer satisfaction is our main goal",
        subTitle: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    }
    const dataAvatar = [
        { img: avatarTeam1, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.", rate: 5 },
        { img: avatarTeam2, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.", rate: 4 },
        { img: avatarTeam3, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus metus tincidunt laoreet ultricies condimentum ac integer aliquam. Lorem diam dignissim amet fermentum elementum dui dui. Aliquam sem elementum morbi imperdiet suscipit erat ut. Purus volutpat in turpis gravida blandit.", rate: 3 },
    ]
    return (
        <Layout>
            <div className='relative w-full h-100 mt-60' >
                <div className="bgGallery absolute top-0 left-0 right-0 w-full h-full z-0" style={{ backgroundImage: `url(${bgTeam})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <OurTeam css={{ absolute: 'absolute' }} />
            </div>

            <div className='md:mt-0 mt-xl'>
                <div className='flex flex-col items-center mt-8'>
                    <div className='text-colorPink font-bold'>Get the Qouta</div>
                    <div className='text-colorPurple text-3xl font-bold my-3'>Meet the pro assitance</div>
                    <div className='text-colorGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</div>
                </div>
                <div className='mt-0'>
                    {dataTeam?.map((item, index) => (
                        <div key={index} className="grid md:grid-cols-2 auto-rows-[200px] my-16">
                            <div className='w-full h-full flex md:justify-end justify-center md:pr-32 pr-0'>
                                <img src={item.img} alt="" className='w-6/12 h-full' />
                            </div>
                            <div className='flex flex-col items-start justify-center md:w-3/5 w-full'>
                                <div className='font-bold text-colorPurple flex md:justify-start justify-center md:w-auto w-full'>{`${item.title}  / `}  <span className='italic text-colorGray font-normal'>{item.subTitle}</span></div>
                                <div className='text-colorGray flex md:justify-start justify-center md:w-auto w-4/5 md:mx-0 mx-auto'>{item.content}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div id='' className='w-full h-98 relative  mt-0' style={{ backgroundImage: `url(${bgTeam1})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div className='divPicGallery10After'></div>
                    <div className='w-4/5 h-full z-20 absolute left-2/4 -translate-x-2/4 flex  justify-center items-center flex-col '>
                        <div id="content" className='md:w-6/12 w-full ' >
                            <div className=" text-white font-bold text-3xl leading-snug text-center mx-auto w-3/4">{dataHome2.title}</div>
                            <div className=" text-gray-400 mt-4 mb-10 font-bold   text-center w-full">{dataHome2.subTitle}</div>

                        </div>
                    </div>
                </div>
            </div>

            <div id='rateGuest' className=' relative h-lg w-full '>
                <div className="bgGallery absolute top-0 left-0 right-0 w-full h-full z-0" style={{ backgroundImage: `url(${bgTeam2})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}></div>
                <div className='h-full w-4/6 m-auto pt-24'>
                    <div className='flex flex-col items-center mt-8'>
                        <div className='text-colorPink font-bold'>Our Testimonials</div>
                        <div className='text-colorPurple text-3xl font-bold my-3'>What our customer says</div>
                        <div className='text-colorGray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.</div>
                    </div>


                    <div id='casourel' className="mt-12 relative h-64 w-full ">
                        <div className="btnPrev absolute lg:top-2/4 top-2/3 -translate-y-2/4 lg:right-0 right-0 " onClick={prevSlide}>
                            <i className="rounded-full p-2 fa-solid fa-arrow-right text-colorPurple font-bold text-3xl cursor-pointer hover:shadow-xl"></i>
                        </div>
                        <div className="btnNext absolute lg:top-2/4 top-2/3 -translate-y-2/4 lg:left-0 left-0 " onClick={nextSlide}>
                            <i className="rounded-full p-2 fa-solid fa-arrow-left text-colorPurple font-bold text-3xl cursor-pointer hover:shadow-xl"></i>
                        </div>
                        {dataAvatar.map((item, index) => (
                            <div key={index} className={`flex flex-col items-center mx-auto lg:w-110 w-auto ${index === currentSlide ? '' : 'hidden'}`}>
                                <img src={item.img} alt="" className='rounded-full' />
                                <div id='divComment' className='px-10 w-full text-sm text-colorGray text-center mt-5'>
                                    {item.content}
                                </div>
                                <div id="divRate" className='w-2/4 mx-auto mt-8 flex justify-center'>
                                    {Array.from({ length: item.rate }, (_, i) => (
                                        <i key={i} className="fa-solid fa-star text-yellow-300 mx-2 text-xl"></i>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>


                </div>
            </div>

        </Layout >
    );
}

export default Team;
