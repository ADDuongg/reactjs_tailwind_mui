import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
const ModalHeader = (props) => {
    const Navigate = useNavigate();
    const location = useLocation();
    const { toggleModal, menuItem } = props.data
    function handleToggle(name) {
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
        <div className="modalHeader">
            <div>
                {menuItem?.map((item, index) => (
                    <div key={index} className="item-modal" onClick={() => handleToggle(item)}>{item} </div>
                ))}

            </div>
            <button className="btnX" onClick={toggleModal}><i className="fa-solid fa-x"></i></button>
        </div>
    );
}

export default ModalHeader;
