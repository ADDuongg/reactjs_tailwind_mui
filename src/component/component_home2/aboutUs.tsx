import React from 'react';
import picAbout from '../../images/pic-about.png'
import imgAbout2 from '../../images/aboutus2.png'
const AboutUs = () => {
    const apiAboutUs = {
        subTitle: "We are the best beauty clinic",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc, ipsum ornare mauris sit quam quis enim.Varius tellus in suspendisse placerat.",
        subContent: "Id dui erat sed quam tellus in purus. Pellentesque congue fringilla cras tellus enim.",
    }
    return (
        <section id="" className='w-full mx-auto lg:h-96 h-auto mb-5'>

            <div className=" lg:flex-row lg:justify-evenly mt-32 w-full flex-col flex items-center">
                <img src={imgAbout2} alt="" className="" />
                <div className="contentAboutUs h-full">
                    <div className="title">About us</div>
                    <div className="sub-title w-3/4">{apiAboutUs.subTitle}</div>
                    <div className="content">{apiAboutUs.content}
                    </div>

                    <button className="btn btn-learnMore mt-4">
                        Learn More
                    </button>
                </div>


            </div>
        </section>
    );
};

export default AboutUs;
