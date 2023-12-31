import { useParams } from "react-router-dom"
import { OneService } from "./components/one-service/OneService";
import { services } from "../../utils/constants/services";
import { FirstViewBackImage } from "../../shared-components/first-view-background-image/FirstViewBackImage";
import { PackagesCarousel } from "./components/packages-carousel/PackagesCarousel";
import './ServiceDetail.css';


export const ServiceDetail = () => {
  
  const param = useParams<{ serviceId: string }>();
  const serviceId = Number(param.serviceId);

  const selectedService = services.find(service => service.id === serviceId);

  console.log('renderr')
  console.log(selectedService)

  return (
    <>
        <FirstViewBackImage src="florero.png" />
        {
            selectedService && 
            <main className="main-service-container">
              <div className="service-content-container">
                <OneService service={selectedService} />
                <PackagesCarousel />
              </div>

            </main>
           
        }
        
    </>
  )
}
