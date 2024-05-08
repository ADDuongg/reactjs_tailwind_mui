import React from 'react';
import frame1 from '../../images/fram1.png'
const MainSlide = () => {
    const buttons = Array.from({ length: 3 }, (_, index) => (
        <div key={index} className={index % 2 !== 0 ? "active-button mx-2" : "btn-slide"}></div>
    ));
    return (
        <div>
            <section id="main-slider">
                <div id="content">
                    <div className="clinic">Clinic & beauty consultant</div>
                    <div className="established">it is a long established fact that a reader will be by the readable content of a
                        page</div>
                    <button className="btn btnDetail">More Details</button>
                </div>
                <div className="divImage">
                    <img className="image-slider" src={frame1} alt="" />
                </div>
                
            </section>
            {/* btn slide */}
            <div className="divBtnSlide">
                {buttons.map((button, index) => (
                    <React.Fragment key={index}>
                        {button}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default MainSlide;
