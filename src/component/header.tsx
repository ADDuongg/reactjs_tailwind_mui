import React, { useState } from 'react';
import MainLogo from '../images/MainLogo.png';
import ModalHeader from '../modal/modalHeader';
import { useLocation, useNavigate } from 'react-router-dom';
const Header = () => {
    const location = useLocation();
    const Navigate = useNavigate();
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const menuItem = ['Home', 'About', 'Service', 'Gallery', 'Blog', 'Gallery', 'Team', 'Contact'];

    function handleToggle(name: string) {
        console.log(name);

        if (location.pathname.includes('home2') && name === 'Home') {
            Navigate("/");
        } else if ((location.pathname.includes('home') || location.pathname.includes(`${name.toLocaleLowerCase()}`)) && name === 'Home') {
            Navigate("/home2");
        } else {
            Navigate(`/${name.toLocaleLowerCase()}`)
        }

    }
    return (
        <div className=''>
            <header id='header' className='w-5/6 absolute flex h-16 justify-between mt-16 mx-auto top-0 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                <img id="logo" src={MainLogo} alt="" />
                <div id="main-menu" className='h-6 w-110 flex justify-between'>
                    {menuItem?.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => handleToggle(item)}
                            className={`h-6 w-auto text-xl cursor-pointer ${index === 0 && !location.pathname.includes('home2') ? 'home' : ''} ${location.pathname.includes('home2') && index === 0 ? 'text-white' : 'text-gray-400'}`}>
                            {item}
                            {index === 0 && <i className="fa-solid fa-plus" style={{ fontSize: '50%' }}></i>}
                        </div>

                    ))}

                </div>
                <button className="btnContact btn">
                    Contact
                </button>
                {!modalVisible && <button className="btnbar" onClick={toggleModal}>
                    <i className="fa-solid fa-bars"></i>
                </button>}
            </header>
            {modalVisible && <ModalHeader data={{ toggleModal, menuItem }} />}
        </div>
    );
};



export default Header;
