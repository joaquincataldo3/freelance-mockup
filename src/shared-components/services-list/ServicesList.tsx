import { useState } from "react";
import './ServicesList.css'
import { ServicesImages, ServicesListProps } from "../../utils/interfaces/interfaces";
import serviceImg1 from '../../assets/manual-carousel-img/services1.jpg';
import serviceImg2 from '../../assets/manual-carousel-img/services2.jpg';
import serviceImg3 from '../../assets/manual-carousel-img/services3.jpg';
import serviceImg4 from '../../assets/manual-carousel-img/services4.jpg';


export const ServicesList = (props: ServicesListProps) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const {maxIndex} = props;

  const handleHover = (index: number) => {
    setActiveIndex(index);
  }

  const clearHover = () => {
    setActiveIndex(null)
  }

  const servicesImages: ServicesImages[] = [
    {
        id: 1,
        src: serviceImg1,
        subtitle: "weddings",
        title: "wedding planner"
    },
    {
        id: 2,
        src: serviceImg2,
        subtitle: "weddings",
        title: "master of ceremonies"
    },
    {
        id: 3,
        src: serviceImg3,
        subtitle: "weddings",
        title: "special events"
    },
    {
        id: 4,
        src: serviceImg4,
        subtitle: "weddings",
        title: "destination wedding"
    },
]

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
