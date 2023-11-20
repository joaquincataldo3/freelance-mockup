import { useState } from "react";
import { DotsCarousel } from "./components/dots-carousel/DotsCarousel";
import '../../views/home/components/auto-play-carousel/Carousel.css';
import { ServicesImages } from "../../utils/interfaces/interfaces";
import carouselImg1 from '../../assets/manual-carousel-img/services1.jpg';
import carouselImg2 from '../../assets/manual-carousel-img/services2.jpg';
import carouselImg3 from '../../assets/manual-carousel-img/services3.jpg';
import carouselImg4 from '../../assets/manual-carousel-img/services4.jpg';
import './ManualCarousel.css'



export const ManualCarousel = () => {

    const [currentImage, setcurrentImage] = useState(0);

    const handleClickOnDot = () => {
        setcurrentImage((prevImage) => (prevImage < servicesImages.length - 1 ? prevImage + 1 : 0));
    };

    const servicesImages: ServicesImages[] = [
        {
            id: 1,
            src: carouselImg1,
            subtitle: "weddings",
            title: "wedding planner"
        },
        {
            id: 2,
            src: carouselImg2,
            subtitle: "weddings",
            title: "master of ceremonies"
        },
        {
            id: 3,
            src: carouselImg3,
            subtitle: "weddings",
            title: "special events"
        },
        {
            id: 4,
            src: carouselImg4,
            subtitle: "weddings",
            title: "destination wedding"
        },
    ]

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