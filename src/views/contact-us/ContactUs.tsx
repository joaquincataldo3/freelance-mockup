import { ContactUsForm } from "./components/contact-us-form/ContactUsForm";
import { FirstViewBackImage } from "../../shared-components/first-view-background-image/FirstViewBackImage";
import { MapIFrame } from "./components/map-iframe/MapIFrame";

import './ContactUs.css';

export const ContactUs = () => {

  
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8535.649117282257!2d-80.22003769223944!3d25.908997963846122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sar!4v1699899698944!5m2!1ses!2sar";


  return (
    <>
        <FirstViewBackImage src={'florero.png'} />
        <main>
            <h1 className="main-title">Contact us</h1>
            <div className="contact-us-box-container">
            <ContactUsForm />
            <MapIFrame src={mapSrc} />
              </div>
          
        </main>
    </>
  )
}
