import React from 'react';
import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';
import pic3 from '../../images/pic3.png';
const MainServices = () => {
    const titleService =
        { title: "Main Services", learnService: "Learn services to focus on your beauty", dumpText: "Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient amet, feugiattellus sagittis, scelerisque eget nulla turpis" }
    const fakeAPI = [
        {
            img: pic1,
            title: "Beauty consultant",
            body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        },
        {
            img: pic2,
            title: "Skin treatments",
            body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        },
        {
            img: pic3,
            title: "Beauty product",
            body: "Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla turpis."
        }
    ]
    return (
        <section id="coreServices">
            <div className="title-content">
                <div className="titleService">
                    {titleService.title}
                </div>

                <div className="learnService">
                    {titleService.learnService}
                </div>
                <div className="dumpText">
                    {titleService.dumpText}
                </div>
            </div>

            <div className="divCardService">
                {fakeAPI?.map((item, index) => (
                    <div className="cardService" key={index}>
                        <img src={item.img} alt="" className="pictureService mx-auto" />
                        <div>
                            <div className="card-title">
                                {item.title}
                            </div>
                            <div className="card-body">
                                {item.body}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}

export default MainServices;
