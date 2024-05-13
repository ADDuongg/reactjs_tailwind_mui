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

    const menuItem = ['Home', 'About', 'Service', 'Gallery', 'Team'];

    function handleToggle(name: string, index: number) {
        console.log(index);

        
        

        if (location.pathname.includes('home2') && name === 'Home') {
            Navigate("/");
        } else if ((location.pathname.includes('home') || location.pathname.includes(`${name.toLocaleLowerCase()}`)) && name === 'Home') {
            Navigate("/home2");
        } else {
            Navigate(`/${name.toLocaleLowerCase()}`)
        }
        
        
    }
    
    
   
    
    return (
        <div>
            <header id='header' className='w-4/6 absolute flex h-16 justify-between mt-16 mx-auto top-0 left-2/4 -translate-x-2/4 -translate-y-2/4'>
                <img id="logo" src={MainLogo} alt="" />
                <div id="main-menu" className='h-6 w-100 xl:ml-28 ml-0 flex justify-between'>
                    {menuItem.map((item, index) => (
                        
                        <div
                            key={index}
                            onClick={() => handleToggle(item, index)}
                            className={`h-6 w-auto text-xl cursor-pointer hover:text-colorPurple ${index === 0 ? 'text-colorPurple font-bold' : (location.pathname.includes(item.toLocaleLowerCase()) ? 'text-colorPurple font-bold': 'text-gray-400')}`}>
                            {item}
                            {index === 0 && <i className="fa-solid fa-plus" style={{ fontSize: '50%' }}></i>}
                            
                        </div>
                    ))}
                </div>
                <button className="btnContact btn xl:ml-0 ml-3" >Contact</button>
                {!modalVisible && <button className="btnbar" onClick={toggleModal}>
                    <i className="fa-solid fa-bars"></i>
                </button>}
            </header>
            {modalVisible && <ModalHeader data={{ toggleModal, menuItem }} />}
        </div>
    );
}

export default Header;
