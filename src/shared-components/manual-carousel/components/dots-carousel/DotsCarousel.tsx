
import { DotsComponentProps } from '../../../../utils/interfaces/interfaces';
import './DotsCarousel.css';

export const DotsCarousel = (props: DotsComponentProps) => {
  const {images, handleClickOnDot, currentImage} = props;
  return (
    <div className='dots-container'>
        <ul className='dots-list'>
            {
                images.map((img, i) => {
                    return (
                        <li key={`${img.src}-${i}`} onClick={handleClickOnDot}><i className={`bx ${currentImage == i ? 'bxs-circle' : 'bx-circle'} carousel-dot`} ></i></li>
                    )
                })
            }
        </ul>
    </div>
  )
}
