import { ClientReviewBox } from './components/client-rewiew-box/ClientReviewBox';
import { ReviewContent } from './components/review-content-container/ReviewContentContainer';
import './ClientReviews.css';

export const ClientReviews = () => {
  return (
    <div className='client-reviews-container'>
        <div className="review-overlay"></div>
        <div className="client-reviews-column">
          <ReviewContent />
        </div>
        <div className="client-reviews-column">
          <ClientReviewBox />
        </div>
       
    </div>
  )
}
