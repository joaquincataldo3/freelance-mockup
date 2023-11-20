import { autoPlayCarouselImgs } from "../../../../utils/constants/carouselImg";
import { useEffect, useRef, useState } from 'react';
import './Carousel.css';
import { CarouselTitleBox } from "../carousel-title-box/CarouselTitleBox";

export const Carousel = () => {

    const listRef = useRef<HTMLUListElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const carouselInterval = setInterval(() => {
          handleCarouselActualImage();
        }, 3000);

        return () => {
          clearInterval(carouselInterval);
        };
      }, [currentIndex]);

    const handleCarouselActualImage = () => {
        setCurrentIndex((prevImage) => (prevImage < autoPlayCarouselImgs.length - 1 ? prevImage + 1 : 0));
    };

    return (
        <div className="main-carousel-container">
            <div className="slider-container">
                <div className="container-images">
                    <ul ref={listRef}>
                        {
                            autoPlayCarouselImgs.map((img, i) => {
                                return (
                                    <li key={img.id}>
                                        <img src={img.src} alt={`${img.src}-${img.id}`}
                                            className={
                                                `carousel-img
                                        ${i === currentIndex
                                        ? 'active'
                                        : i === currentIndex - 1 || (currentIndex === 0 && i === autoPlayCarouselImgs.length - 1)
                                        ? 'prev-slide'
                                        : 'next-slide'
                                        }`} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            <CarouselTitleBox />
        </div>
    )
}
