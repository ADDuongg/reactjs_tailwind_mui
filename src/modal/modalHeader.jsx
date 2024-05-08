import React from 'react';

const ModalHeader = (props) => {
    const {toggleModal} = props.data
    return (
        <div className="modalHeader">
            <div>
                <div className="item-modal">Home </div>
                <div className="item-modal">About</div>
                <div className="item-modal">Service</div>
                <div className="item-modal">Gallery</div>
                <div className="item-modal">Blog</div>
            </div>
            <button className="btnX" onClick={toggleModal}><i className="fa-solid fa-x"></i></button>
        </div>
    );
}

export default ModalHeader;
