
import {FirstViewBackgroundProps} from '../../../../utils/interfaces/interfaces'



export const FirstViewBackImage = (props: FirstViewBackgroundProps) => {
  const {src} = props;


  return (
    <div className="first-img-container">
        <div className="overlay"></div>
            <div className="about-first-img-container">
              <img src={`back-images/${src}`} alt="" />
            </div>
    </div>
  )
}
