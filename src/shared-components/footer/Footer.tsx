
import { AllRightsReserved } from '../all-rights-reserved/AllRightsReserved';
import { BusinessDataList } from '../business-data-list/BusinessDataList';
import { LogoContainer } from '../logo-container/LogoContainer';
import { SocialMediaBox } from '../social-media-box/SocialMediaBox';
import './Footer.css';

export const Footer = () => {
  return (
    <footer>
        <div className="column-container">
          <LogoContainer color='dark'/>
        </div>
        <div className="column-container">
          
          <SocialMediaBox fontSize='2.2' color='var(--light-white)' />
        </div>
        <div className="column-container">
          <BusinessDataList titleSize='1' titleColor='#a2783a' subtitleSize='0.875' subtitleColor='white' />   
        </div>
        <div className="column-container">
          <AllRightsReserved />
        </div>
        
      
    </footer>
  )
}
