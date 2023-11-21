import { useParams } from "react-router-dom"
import { OneService } from "./components/one-service/OneService";
import { services } from "../../utils/constants/services";
import { FirstViewBackImage } from "../../shared-components/first-view-background-image/FirstViewBackImage";


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
            selectedService && <OneService service={selectedService} />
        }
        
    </>
  )
}
