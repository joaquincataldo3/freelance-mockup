import { useState } from "react";
import { servicesImages } from "../../utils/constants/carouselImg";
import './ServicesList.css'
import { ServicesListProps } from "../../utils/interfaces/interfaces";

export const ServicesList = (props: ServicesListProps) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const {maxIndex} = props;

  const handleHover = (index: number) => {
    setActiveIndex(index);
  }

  const clearHover = () => {
    setActiveIndex(null)
  }

  return (
    <>
    

    <ul className="service-list">
        {
            servicesImages.map((service, index) => {
                const {id, src, title, subtitle } = service;
                if(maxIndex == 3) {
                  if(index <= 2) {
                    return (
                      <li key={id} className="service-card" onMouseEnter={() => handleHover(index)} onMouseLeave={clearHover}>
                          <div className={`service-overlay ${activeIndex == index && 'service-overlay-active'}`}></div>
                          <img src={src} alt={src} className="service-img"/>
                          <div className={`over-text-container ${activeIndex == index && 'over-text-container-active'}`}>
                              <p className="over-text-subtitle">{subtitle}</p>
                              <p className="over-text-title">{title}</p>
                          </div>
                      </li>
                  )
                  }
                } else {
                  return (
                    <li key={id} className="service-card" onMouseEnter={() => handleHover(index)} onMouseLeave={clearHover}>
                        <div className={`service-overlay ${activeIndex == index && 'service-overlay-active'}`}></div>
                        <img src={src} alt={src} className="service-img"/>
                        <div className={`over-text-container ${activeIndex == index && 'over-text-container-active'}`}>
                            <p className="over-text-subtitle">{subtitle}</p>
                            <p className="over-text-title">{title}</p>
                        </div>
                    </li>
                )
                }
              
            })
        }
    </ul>
    </>
  )
}
