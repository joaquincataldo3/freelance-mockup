import { packageList } from '../../../../utils/constants/services';
import './PackageDescription.css';

export const PackageDescription = () => {

  return (
    <div className='package-description-container'>
      <h4>Package includes</h4>
      <ol className='package-list-container'>
        {
          packageList.map((pack, index) => {
            return (
              <li key={index} className='package-li'>{pack.description}</li>
            )
          })
        }
      </ol>
    </div>
  )
}
