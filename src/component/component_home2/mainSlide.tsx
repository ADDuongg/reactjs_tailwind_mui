import React from 'react';

const MainSlide = () => {
    const buttons = Array.from({ length: 3 }, (_, index) => (
        <div key={index} className={index % 2 !== 0 ? "active-button mx-2" : "btn-slide"}></div>
    ));
    const dataHome2 = {
        title: "Your beauty center place",
        subTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo, massa pellentesque arcu fusce et magna consequat neque vitae lobortis.",
    }
    return (
        <>
            <section id="main-slider2">
                <div id="content" className='w-5/12' >
                    <div className=" text-white font-bold text-5xl  leading-snug">{dataHome2.title}</div>
                    <div className=" text-gray-300 mt-4 mb-10 font-bold w-4/5  ">{dataHome2.subTitle}</div>
                    <button className=" hover:bg-colorPurple  text-xl border-2 text-white bg-transparent rounded-2xl h-14 w-56">More Details</button>
                </div>
                
                <div className='flex items-center'>
                <i className="fa-regular fa-circle-play text-9xl text-white shadow-lg"></i>
                <div className='text-white text-xl ml-6'>Tour Video</div>
                </div>
               
            </section>
            {/* btn slide */}
            <div className="divBtnSlide mt-3">
                {buttons.map((button, index) => (
                    <React.Fragment key={index}>
                        {button}
                    </React.Fragment>
                ))}
            </div>
        </>
    );
}

export default MainSlide;
