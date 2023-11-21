import { OneServiceProps, Service } from '../../../../utils/interfaces/interfaces';
import { PackageDescription } from '../package-description/PackageDescription';
import './OneService.css';

export const OneService = (props: OneServiceProps) => {

  const {service} = props;
  const {title, subtitle, description, src} = service;
  
  return (
    <div className='service-container'>
      <h2>{subtitle} </h2>
      <h1>{title}</h1>
      <div className="oneservice-column-container">
      <div className="one-service-img-container">
        <img src={src} alt="" />
      </div>
      <div className="one-service-description-container">
        <p>{description}</p>
        <PackageDescription />
      </div>
      </div>
     
    </div>
  )
}
