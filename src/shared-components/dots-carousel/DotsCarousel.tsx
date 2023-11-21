
import { DotsComponentProps } from '../../utils/interfaces/interfaces';
import './DotsCarousel.css';

export const DotsCarousel = (props: DotsComponentProps) => {
  const {items, handleClickOnDot, currentImage} = props;
  return (
    <div className='dots-container'>
        <ul className='dots-list'>
            {
                    items.map((_item, index) => {
                        return (
                            <li key={`${index}`} onClick={handleClickOnDot}><i className={`bx ${currentImage == index ? 'bxs-circle' : 'bx-circle'} carousel-dot`} ></i></li>
                        )
                    })
                }
        </ul>
    </div>
  )
}
