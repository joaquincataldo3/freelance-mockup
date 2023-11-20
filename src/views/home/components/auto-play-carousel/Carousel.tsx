
import { useEffect, useRef, useState } from 'react';
import { CarouselTitleBox } from "../carousel-title-box/CarouselTitleBox";
import { CarouselImgs } from "../../../../utils/interfaces/interfaces";
import carouselImg1 from '../../../../assets/home/auto-play-carousel-img/1.jpg'
import carouselImg2 from '../../../../assets/home/auto-play-carousel-img/2.jpg'
import carouselImg3 from '../../../../assets/home/auto-play-carousel-img/3.jpg'
import carouselImg4 from '../../../../assets/home/auto-play-carousel-img/4.jpg'
import './Carousel.css';


export const Carousel = () => {

    const listRef = useRef<HTMLUListElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselImages: CarouselImgs[] = [
        {
            id: 1,
            src: carouselImg1
        },
        {
            id: 2,
            src: carouselImg2
        },
        {
            id: 3,
            src: carouselImg3
        },
        {
            id: 4,
            src: carouselImg4
        },
    ]

    useEffect(() => {
        const carouselInterval = setInterval(() => {
          handleCarouselActualImage();
        }, 3000);

        return () => {
          clearInterval(carouselInterval);
        };
      }, [currentIndex]);

    const handleCarouselActualImage = () => {
        setCurrentIndex((prevImage) => (prevImage < carouselImages.length - 1 ? prevImage + 1 : 0));
    };

    return (
        <div className="main-carousel-container">
            <div className="slider-container">
                <div className="container-images">
                    <ul ref={listRef}>
                        {
                            carouselImages.map((img, i) => {
                                return (
                                    <li key={img.id}>
                                        <img src={img.src} alt={`${img.src}-${img.id}`}
                                            className={
                                                `carousel-img
                                        ${i === currentIndex
                                        ? 'active'
                                        : i === currentIndex - 1 || (currentIndex === 0 && i === carouselImages.length - 1)
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
