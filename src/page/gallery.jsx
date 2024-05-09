import React from 'react';
import Layout from '../layout/layout';
import picGallery1 from '../images/picGallery1.png';
import picGallery2 from '../images/picGallery2.png';
import picGallery3 from '../images/picGallery3.png';
import picGallery4 from '../images/picGallery4.png';
import picGallery5 from '../images/picGallery5.png';
import picGallery6 from '../images/picGallery6.png';
import picGallery7 from '../images/picGallery7.png';
import picGallery8 from '../images/picGallery8.png';
import picGallery9 from '../images/picGallery9.png';
import picGallery10 from '../images/picGallery10.png';
import bgGallery1 from '../images/bgGallery1.png';
const Gallery = () => {
    const img = [`${picGallery1}`, `${picGallery2}`, `${picGallery3}`, `${picGallery4}`, `${picGallery5}`, `${picGallery6}`, `${picGallery7}`, `${picGallery8}`, `${picGallery9}`,]
    const dataHome2 = {
        title: "Watch the video tour",
        subTitle: " Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    }
    return (
        <Layout>
            <div className='relative w-full h-100 mt-60' >
                <div className="w-5/6 mx-auto">
                    <div className="w-full mx-auto flex md:flex-row flex-col justify-between items-center">
                        <div className='flex flex-col md:items-start items-center p-6'>
                            <div className='font-bold text-colorPink'>Our Gallery</div>
                            <div className='font-bold text-colorPurple text-3xl md:text-start text-center'>Check out the collection pictures from our clinic</div>
                        </div>
                        <div className='text-colorGray p-10 md:w-3/4 w-full'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis
                        </div>
                    </div>
                    <div className="divImgGallery w-full grid md:grid-cols-3 auto-rows-[200px] gap-10">
                        {img?.map((item, index) => (
                            <img src={item} alt="" className='w-full h-full object-cover rounded-3xl' />
                        ))}
                    </div>
                    <div className='text-colorGray w-4/6 mt-4'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim, <span className="text-colorPurple font-bold">our team.</span>
                    </div>

                </div>
            </div>

            <div id='' className='w-full h-98 relative md:mt-0 mt-xxl' style={{ backgroundImage: `url(${picGallery10})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='divPicGallery10After'></div>
                <div className='w-4/5 h-full z-20 absolute left-2/4 -translate-x-2/4 flex  justify-center items-center flex-col '>
                    <div id="content" className='md:w-6/12 w-full ' >
                        <div className=" text-white font-bold text-4xl leading-snug  text-center">{dataHome2.title}</div>
                        <div className=" text-gray-400 mt-4 mb-10 font-bold   text-center w-full">{dataHome2.subTitle}</div>

                    </div>

                    <div className='flex items-center'>
                        <i className="fa-regular fa-circle-play text-9xl text-white shadow-lg"></i>

                    </div>
                </div>
            </div>

            <div className="w-full md:flex-row flex md:justify-between flex-col items-center mx-auto px-28  py-28 " style={{backgroundImage: `url(${bgGallery1})`, backgroundPosition: 'right', backgroundRepeat: 'no-repeat'}}>
                <div className='w-2/4 md:pt-0 pt-28'>
                    <div className='text-colorPink font-bold'>Get the Qouta</div>
                    <div className='text-colorPurple text-3xl font-bold my-3'>Want to be handled by our professional team immediately?</div>
                    <div className='text-colorGray'>Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.</div>
                </div>
                <button className='btn p-3 h-14 w-80 md:my-0 my-5'>Make an Appointment</button>
            </div>
        </Layout>
    );
}

export default Gallery;
