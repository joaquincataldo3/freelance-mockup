import { FirstViewBackImage } from "../about/components/first-view-background-image/FirstViewBackImage";
import { ServicesList } from "../../shared-components/services-list/ServicesList";
import './Services.css';

export const Services = () => {


  return (
    <>
      <FirstViewBackImage src="florero.png" />
      <main className="services-main">
      <h1 className="main-title">Services</h1>
        <ServicesList maxIndex={null} />
      </main>

    </>
  )
}
