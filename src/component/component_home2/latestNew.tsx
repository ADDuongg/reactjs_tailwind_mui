import React from 'react';
import picBlog1 from '../../images/picBlog1.png';
import picBlog2 from '../../images/picBlog2.png';
import picBlog3 from '../../images/picBlog3.png';
const LatestNew = () => {
    const blog = {
        title: 'The Blog',
        subTitle: 'Our latest new',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit'
    }
    const fakeAPI = [
        {
            img: picBlog1,
            title: "How much does a consultation cost at our clinic?",
            /* subTitle: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ...", */
            body: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ..."
        },
        {
            img: picBlog2,
            title: "Watch out! don't choose the wrong beauty product",
            /* subTitle: "Bella sebastian", */
            body: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ..."
        },
        {
            img: picBlog3,
            title: "About skin care you need to know",
            /* subTitle: "Lilly Adams", */
            body: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings ..."
        }
    ]
    return (
        <section id="our-team" className=' h-auto '>
            <div className="title-team">
                <div className="title">
                    {blog.title}
                </div>
                <div className="sub-title">
                    {blog.subTitle}
                </div>
                <div className="content">
                    {blog.content}
                </div>
            </div>
            <section id="coreServices">
                <div className="w-full mt-8 h-full flex lg:flex-row lg:justify-center flex-col items-center">
                    {fakeAPI?.map((item, index) => (
                        <div className={`shadow-card h-4/5 text-center rounded-2xl w-96 ${index === 1 ? "mx-12 my-12" : ""}`} key={index}>
                            <img src={item.img} alt="" className="w-full" />
                            <div className=" mt-14 px-12">
                                <div className="text-start text-colorPurple font-bold text-lg">
                                    {item.title}
                                </div>
                                <div className="text-start text-colorGray mt-4 ">
                                    {item.body}
                                </div>
                                <div className='mt-5 text-colorPink font-bold text-sm flex items-center'>Learn more<i className="fa-solid fa-angles-right ml-2"></i></div>
                            </div>

                        </div>
                    ))}

                </div>
            </section>
        </section>
    );
};

export default LatestNew;
