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
            <section id='' className={` h-104 bghome2 bg-no-repeat w-full flex md:flex-row flex-col items-center bg-cover md:justify-evenly justify-center`}>
                <div id="content" className='md:w-5/12 w-full ' >
                    <div className=" text-white font-bold text-5xl md:w-auto w-full md:text-start text-center  leading-snug">{dataHome2.title}</div>
                    <div className=" text-gray-300 mt-4 mb-10 font-bold md:w-4/5 w-full md:text-start text-center">{dataHome2.subTitle}</div>
                    <div className='w-full md:text-start text-center'>
                    <button className=" hover:bg-colorPurple  text-xl border-2 text-white bg-transparent rounded-2xl h-14 w-56 mx-auto">More Details</button>
                    </div>
                </div>
                
                <div className='flex items-center md:mt-0 mt-10'>
                <i className="fa-regular fa-circle-play text-9xl text-white shadow-lg hover:opacity-40"></i>
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
