import aboutUsMainImg from '../../../../assets/home/auto-play-carousel-img/1.jpg';
import './FirstColumn.css';

export const FirstColumn = () => {
  return (
    <div className="about-main-first-column">
                    <div className="about-title-container">
                        <h1 className='main-title'>About us</h1>
                    </div>
                    <div className="about-main-img-container">
                        <img src={aboutUsMainImg} alt="" />
                    </div>
                    <div className="subtitle-description-container">
                        <p className="subtitle-description">Lorem ipsum dolor sit</p>
                    </div>
                </div>
  )
}
