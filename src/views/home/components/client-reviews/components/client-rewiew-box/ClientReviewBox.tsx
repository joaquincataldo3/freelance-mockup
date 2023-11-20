import coupleImg from '../../../../../../assets/home/reviews/couple-review.jpg';
import './ClientReviewBox.css';

export const ClientReviewBox = () => {
  return (
    <div className='review-box-container'>
      <div className="review-box-text-container">
      <p className='review-box-text'>Lorem ipsum dolor sit amet consectetur dolor adipisicing elit. Laboriosam, ipsum delectus nobis ipsa veritatis voluptatibus ea laudantium qui sunt repellendus provident saepe accusamus quidem velit eaque dolore ipsam quas a fugit.</p>
      </div>
      <div className="review-box-info-container">
        <div className="review-box-img-container">
          <img src={coupleImg} alt="couple-review" />
        </div>
        <div className="review-info-title">
          <p>Amaya and Axel</p>
          <p>March 2023, USA</p>
        </div>
      </div>
    </div>
  )
}
