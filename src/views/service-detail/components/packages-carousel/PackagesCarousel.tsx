import { useState } from "react";
import { packageList, packagePlans } from "../../../../utils/constants/services";
import './PackagesCarousel.css';
import { DotsCarousel } from "../../../../shared-components/dots-carousel/DotsCarousel";

export const PackagesCarousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickOnDot = () => {
        setCurrentIndex((prevSlide) => (prevSlide < packagePlans.length - 1 ? prevSlide + 1 : 0));
    };

    return (
        <>
            <div className='package-carousel-container'>
                <div className="package-slider-container">
                    <ul className="package-carousel-list">
                        {
                            packagePlans.map((pack, index) => {
                                return <li key={index} className={`package-carousel-li
                        ${currentIndex === index && window.innerWidth < 1024
                                        ? 'active'
                                        : index === currentIndex - 1 || (currentIndex === 0 && index === packageList.length - 1)
                                            ? 'prev-slide'
                                            : 'next-slide'
                                    }
                        }`}>
                                    <div className="pack-title">
                                        <h4>{pack.name}</h4>
                                    </div>
                                    <div className="pack-price">
                                        <h6>{pack.price}$</h6>
                                        <p>Starting from</p>
                                    </div>
                                    <ul className="package-includes-list">
                                        {
                                            pack.includes.map((item, index) => {
                                                return (
                                                    <li className="pack-includes-li" key={index}>{item.description}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <button className="contact-us-button">
                                        <a href="/contact">Contact us !</a>
                                    </button>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
            <DotsCarousel items={packagePlans} handleClickOnDot={handleClickOnDot} currentImage={currentIndex}/>
        </>
    )
}
