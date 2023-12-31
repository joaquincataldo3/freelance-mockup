import { ManualCarousel } from '../../../../shared-components/manual-carousel/ManualCarousel';
import { ServicesList } from '../../../../shared-components/services-list/ServicesList';
import './ServicesSectionBox.css';

export const ServicesSectionBox = () => {
    return (
        <section className="our-services-home-box">


            {
                window.innerWidth < 1024 ?
                <ManualCarousel />
                :
                <ServicesList maxIndex={3}/>
            }
        </section>
    )
}
