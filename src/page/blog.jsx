import React, { useState } from 'react';
import Layout from '../layout/layout';
import bgBlog from '../images/bgBlog.png'
import picBlog1 from '../images/picBlog1.png';
import picBlog2 from '../images/picBlog2.png';
import picBlog3 from '../images/picBlog3.png';
import picBlog4 from '../images/picBlog4.png';
import picBlog5 from '../images/picBlog5.png';
import picBlog6 from '../images/picBlog6.png';
const Blog = () => {
    const [paginate, setPaginate] = useState(0)
    const dataBlog = [
        {
            img: picBlog1, type: 'Consulation', title: 'How much does a consultation cost at our clinic?', content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…'
        },
        {
            img: picBlog2, type: 'Beauty', title: "Watch out! don't choose the wrong beauty product", content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…'
        },
        {
            img: picBlog3, type: 'Treatments', title: 'About skin care you need to know', content: 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the…'
        },
    ]
    const dataSearch = [
        {
            img: picBlog4, date: '01 jan 2021', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
            img: picBlog5, date: '01 jan 2021', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
        {
            img: picBlog6, date: '01 jan 2021', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing.'
        },
    ]
    const handlePaginate = (index) => {
        setPaginate(index)
    }
    const tags = ['beauty', 'cute', 'skin', 'glow', 'style', 'clinic', 'stylee', 'greate', 'cutes']
    return (
        <Layout>
            <div id='divPicService8' className='w-full h-80 relative mt-60' style={{ backgroundImage: `url(${bgBlog})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className='divPicService8After'></div>
                <div className='w-4/5 h-full z-20 absolute left-2/4 -translate-x-2/4 flex md:flex-row md:justify-between items-center flex-col justify-center'>
                    <div id="content" className='md:w-11/12 w-full mx-auto flex justify-between items-center' >
                        <span className='text-white font-bold text-4xl'>Blog</span>
                        <span className='text-blue-50'>Home * Blog</span>
                    </div>
                </div>
            </div>

            <div id='divContentPage' className='lg:px-40 px-10 mt-20 lg:flex-row flex-col  flex justify-between '>
                <div className="divBlog lg:w-7/12 w-full ">
                    {
                        dataBlog?.map((item, index) => (
                            <div key={index} className="divBlog w-full mb-28 ">
                                <div className="blogContent w-full" style={{ boxShadow: '0px 25px 50px 25px #F6F7FF', borderRadius: '3rem' }}>
                                    <div className='w-full h-1/4'>
                                        <img src={item.img} alt="" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='w-full h-2/4 p-14'>
                                        <div className='text-colorPink  text-2xl'><i className="fa-solid fa-folder"></i>  Consultant</div>
                                        <div className="my-6 text-colorPurple font-bold text-4xl">
                                            {item.title}
                                        </div>
                                        <div className='text-colorGray text-xl'>
                                            {item.content}
                                        </div>
                                        <div>
                                            <button className='btn text-white h-14 w-52 font-bold flex items-center justify-center mt-6'>Read More <i className="fa-solid fa-caret-right ml-3 text-xl"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    
                </div>
                <div className="divSearch lg:w-5/12 w-full lg:mb-0 mb-10">
                    <div className="w-full h-16 relative" >
                        <input
                            type="text"
                            name="username"
                            id="username"
                            autoComplete="username"
                            className="outline-none border-colorPurple focus:border-2 sm:w-3/5 w-3/4 placeholder:pl-4 block flex-1 sm:mx-auto mx-0 h-16 rounded-l-3xl py-1.5 pl-1 lg:placeholder:text-xl placeholder:text-gray-400 placeholder:text-sm"
                            placeholder="Search here ..."
                            style={{ boxShadow: '0px 25px 50px 25px #F6F7FF' }}
                        />
                        <button className='border-colorPurple hover:opacity-95 absolute right-6 bg-colorPurple text-white rounded-r-3xl top-0 bottom-0 h-full w-20 text-3xl'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                    <div className="rounded-3xl lg:w-3/4 w-full mt-20 rounded-4xl py-10 lg:ml-24 ml-0" style={{ boxShadow: '0px 25px 50px 25px #F6F7FF' }}>
                        <div className="w-full p-8">
                            <span className='text-colorPurple font-bold '>Recent Posts</span>
                            {
                                dataSearch?.map((item, index) => (
                                    <div key={index} className='flex justify-between mt-8'>
                                        <div className=' w-4/12'><img src={item.img} alt="" className='w-full h-full' /></div>
                                        <div className="w-8/12 pl-5">
                                            <div className='text-colorPink font-bold'>{item.date}</div>
                                            <div className='text-colorGray mt-3'>{item.content}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="rounded-3xl lg:w-3/4 w-full mt-20 rounded-4xl py-10 lg:ml-24 ml-0" style={{ boxShadow: '0px 25px 50px 25px #F6F7FF' }}>
                        <div className="w-full px-8">
                            <span className='text-colorPurple font-bold '>Cloud Tags</span>
                            <div className="grid grid-cols-3 auto-rows-auto gap-4 mt-6">
                                {
                                    tags?.map((item, index) => (
                                        <div key={index} className=' text-colorGray rounded-xl h-auto w-full p-3 cursor-pointer hover:bg-colorPink hover:text-white text-center'>{item}</div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="rounded-3xl lg:w-3/4 w-full mt-20 rounded-4xl py-10 lg:ml-24 ml-0" style={{ boxShadow: '0px 25px 50px 25px #F6F7FF' }}>
                        <div className="w-full px-8">
                            <span className='text-colorPurple font-bold '>Social Connect</span>
                            <div className=" mt-6 flex justify-between">
                                <div className='rounded-full shadow-icon h-10 p-3 shadow-lg cursor-pointer w-10 flex justify-center items-center hover:text-blue-700'><i className="fa-brands fa-facebook-f"></i></div>
                                <div className='rounded-full shadow-icon h-10 p-3 shadow-lg cursor-pointer w-10 flex justify-center items-center hover:text-blue-500'><i className="fa-brands fa-twitter"></i></div>
                                <div className='rounded-full shadow-icon h-10 p-3 shadow-lg cursor-pointer w-10 flex justify-center items-center hover:text-pink-600'><i className="fa-brands fa-instagram"></i></div>
                                <div className='rounded-full shadow-icon h-10 p-3 shadow-lg cursor-pointer w-10 flex justify-center items-center hover:text-blue-700'><i className="fa-brands fa-linkedin"></i></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-3/5 mx-auto flex justify-center items-center mt-10 sm:mb-0 mb-10'>
                {Array.from({ length: 3 }, (_, index) => (
                    <div key={index} onClick={() => handlePaginate(index)} className={`text-center rounded-full p-2 ${paginate === index ? 'bg-[#172176]' : ''} ${paginate === index ? 'text-white' : 'text-colorGray'} cursor-pointer mx-3 h-10 w-10`}>{index + 1}</div>
                ))}
            </div>
        </Layout>
    );
}

export default Blog;
