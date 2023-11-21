import { FirstViewBackImage } from "../../shared-components/first-view-background-image/FirstViewBackImage";
import { ServicesList } from "../../shared-components/services-list/ServicesList";
import './Services.css';

export const Services = () => {

  return (
    <>
      <FirstViewBackImage src="florero.png" />
      <main className="services-main">

        <ServicesList maxIndex={null} />
      </main>

    </>
  )
}
