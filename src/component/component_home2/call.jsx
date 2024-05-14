import React from 'react';

const Call = () => {
    return (
        <div>
            <section id='callRequest' className='sm:my-32 mt-10 md:mb-8 mb-10'>
                <div className="flex lg:flex-row lg:justify-center flex-col items-center gap-5">
                    <div className='w-98'>
                        <div className='text-colorPurple font-bold text-3xl'>Request call services</div>
                        <div className='text-colorGray text-md'>Lorem ipsum dolor sit amet, consect adipiscing elit <h1 className='text-colorPurple font-bold '>Contact Us .</h1></div>
                    </div>
                    <div className="call sm:w-3/6 w-full  h-16 relative">
                            <input
                                type="text"
                                name="username"
                                id="username"
                                autoComplete="username"
                                className="w-3/4 placeholder:pl-4 block flex-1 mx-auto  h-16 border border-colorGray  rounded-l-3xl  py-1.5 pl-1  lg:placeholder:text-xl placeholder:text-gray-400 placeholder:text-sm"
                                placeholder="Insert your phone number here"
                            />
                            <button className='absolute right-14 bg-colorPink text-white rounded-r-3xl top-0 bottom-0 h-full w-36 text-3xl'><i className="fa-solid fa-phone-volume"></i></button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Call;
