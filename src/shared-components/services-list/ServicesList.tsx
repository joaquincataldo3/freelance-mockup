import { useState } from "react";
import './ServicesList.css'
import { ServicesListProps } from "../../utils/interfaces/interfaces";
import { services } from "../../utils/constants/services";



export const ServicesList = (props: ServicesListProps) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const { maxIndex } = props;

  const handleHover = (index: number) => {
    setActiveIndex(index);
  }

  const clearHover = () => {
    setActiveIndex(null)
  }

  return (
    <div className="services-list-container">
      <h3 className="services-list-subtitle">Our services</h3>
      <h2 className="services-list-title">Services</h2>
      <ul className="service-list">
        {
          services.map((service, index) => {
            const { id, src, title, subtitle } = service;
            if (maxIndex == 3) {
              if (index <= 2) {
                return (
                  <li key={id} className="service-card" onMouseEnter={() => handleHover(index)} onMouseLeave={clearHover}>
                    <a href={`services/${id}`}>
                      <div className={`service-overlay ${activeIndex == index && 'service-overlay-active'}`}></div>
                      <img src={src} alt={src} className="service-img" />
                      <div className={`over-text-container ${activeIndex == index && 'over-text-container-active'}`}>
                        <p className="over-text-subtitle">{subtitle}</p>
                        <p className="over-text-title">{title}</p>
                      </div>
                    </a>
                  </li>
                )
              }
            } else {
              return (
                <li key={id} className="service-card" onMouseEnter={() => handleHover(index)} onMouseLeave={clearHover}>
                  <a href={`services/${id}`}>
                    <div className={`service-overlay ${activeIndex == index && 'service-overlay-active'}`}></div>
                    <img src={src} alt={src} className="service-img" />
                    <div className={`over-text-container ${activeIndex == index && 'over-text-container-active'}`}>
                      <p className="over-text-subtitle">{subtitle}</p>
                      <p className="over-text-title">{title}</p>
                    </div>
                  </a>
                </li>
              )
            }

          })
        }
      </ul>
    </div>
  )
}
