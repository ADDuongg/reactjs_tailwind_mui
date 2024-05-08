import React from 'react';
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
const MainServices = () => {
    const titleService =
        { title: "Main Services", learnService: "Our focus services", dumpText: "Lorem ipsum dolor sit amet." }
    const fakeAPI = [
        {
            img: icon1,
            title: "Beauty consultant",
            body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        },
        {
            img: icon2,
            title: "Skin treatments",
            body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        },
        {
            img: icon3,
            title: "Beauty product",
            body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        }
    ]
    return (
        <section className='mx-auto mt-16 w-full h-3/4'>
            <div className="title-content">
                <div className="titleService">
                    {titleService.title}
                </div>

                <div className="text-colorPurple w-3/5 font-bold text-4xl text-center h-auto mt-4">
                    {titleService.learnService}
                </div>
                <div className="text-colorGray text-lg mt-5 mb-20">
                    {titleService.dumpText}
                </div>
               
            </div>

            <div className="mt-8 flex lg:justify-between lg:flex-row flex-col items-center w-4/5 mx-auto">
                {fakeAPI?.map((item, index) => (
                    <div className={`${index === 1 ? "border-blue-600 my-10" : 'border-gray-400'} border-2 rounded-3xl lg:w-1/4 w-auto h-80 flex flex-col justify-evenly p-7`} key={index}>
                        <img src={item.img} alt="" className="mr-auto" />
                        <div className='flex flex-col items-start'>
                            <div className="text-colorPurple text-xl font-bold mb-6">
                                {item.title}
                            </div>
                            <div className="text-colorGray">
                                {item.body}
                            </div>
                            <div className='mt-4 text-colorPink font-bold text-sm flex w-auto justify-between items-center'>Learn more<i className="fa-solid fa-angles-right ml-2"></i></div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default MainServices;
