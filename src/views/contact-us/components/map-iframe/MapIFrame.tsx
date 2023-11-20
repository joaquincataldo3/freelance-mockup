
import { ImageSrcProps } from '../../../../utils/interfaces/interfaces';
import './MapIFrame.css';

export const MapIFrame = (props: ImageSrcProps) => {
  const {src} = props;
  return (
    <div className="map-iframe-container">
  <iframe className='map-iframe'
    src={src} 
    width="600" height="450"></iframe>
    </div>
  
  )
}
