import { useState } from "react";
import { servicesImages } from "../../utils/constants/carouselImg";
import { DotsCarousel } from "./components/dots-carousel/DotsCarousel";
import './ManualCarousel.css'
import '../../views/home/components/auto-play-carousel/Carousel.css';


export const ManualCarousel = () => {

    const [currentImage, setcurrentImage] = useState(0);

    const handleClickOnDot = () => {
        setcurrentImage((prevImage) => (prevImage < servicesImages.length - 1 ? prevImage + 1 : 0));
    };

    return (
        <div className="manual-main-carousel-container">
            <div className="manual-slider-container">
                <ul className="slider-list">
                    {
                        servicesImages.map((img, i) => {
                            return (
                                <>
                                    <li key={`${img.id}-${img.src}`} className={`carousel-img-li
                                         ${currentImage === i
                                            ? 'active'
                                            : i === currentImage - 1 || (currentImage === 0 && i === servicesImages.length - 1)
                                                ? 'prev-slide'
                                                : 'next-slide'
                                        }
                                         }`}>
                                        <a href="#" key={`${img.id}-${img.src}`}>
                                            <img src={img.src} alt={`${img.src}-${img.id}`}
                                                className={
                                                    `manual-carousel-img`} />
                                          
                                        </a>
                                    </li>

                                </>
                            )
                        })
                    }
                </ul>

            </div>

            <DotsCarousel images={servicesImages} handleClickOnDot={handleClickOnDot} currentImage={currentImage} />
        </div>
    )
}