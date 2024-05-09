import React from 'react';
import avatar1 from '../../images/avatar1.png';
import avatar2 from '../../images/avatar2.png';
import avatar3 from '../../images/avatar3.png';
const OurTeam = (props: any) => {
    const {absolute} = props.css
    const fakeAPI = [
        {
            img: avatar1,
            title: "Surgeon",
            subTitle: "Briyan Nevalli",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
        },
        {
            img: avatar2,
            title: "Dermatologist",
            subTitle: "Bella sebastian",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
        },
        {
            img: avatar3,
            title: "Beauty product",
            subTitle: "Lilly Adams",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
        }
    ]
    return (
        <section id="our-team" className={`${absolute ? 'absolute z-20' : ''} w-full `}>
            <div className="title-team">
                <div className="title">
                    Professional Teams
                </div>
                <div className="sub-title">
                    The Professional expert
                </div>
                <div className="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
                </div>
            </div>
            <section id="" className=' w-10/12 mx-auto h-full mt-16'>
                <div className="divCardTeam ">
                    {fakeAPI?.map((item, index) => (
                        <div className={index % 2 !== 0 ? "shadow-card cardTeam" : "cardTeam"} key={index}>
                            <img src={item.img} alt="" className="pictureService mx-auto" />
                            <div className="divDetailTeam">
                                <div className="card-title">
                                    {item.title}
                                </div>
                                <div className="card-subtitle">
                                    {item.subTitle}
                                </div>
                                <div className="card-body">
                                    {item.body}
                                </div>
                            </div>
                            <div className="iconTeam flex justify-around w-3/5 mx-auto mt-10">
                                <div className='rounded-full w-14 h-14 shadow flex justify-center items-center'>
                                    <i className="text-black fa-twitter fa-brands text-2xl"></i>
                                </div>
                                <div className='rounded-full w-14 h-14 shadow flex justify-center items-center'>
                                    <i className="text-black fa-brands fa-facebook-f text-2xl"></i>
                                </div>
                                <div className='rounded-full w-14 h-14 shadow flex justify-center items-center'>
                                    <i className="text-black fa-instagram fa-brands text-2xl"></i>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </section>
    );
};

export default OurTeam;
