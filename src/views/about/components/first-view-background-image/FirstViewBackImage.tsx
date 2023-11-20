import backImage from '../../../../assets/back-images/florero.png';
export const FirstViewBackImage = () => {
  
  return (
    <div className="first-img-container">
        <div className="overlay"></div>
            <div className="about-first-img-container">
              <img src={backImage} alt="" />
            </div>
    </div>
  )
}
