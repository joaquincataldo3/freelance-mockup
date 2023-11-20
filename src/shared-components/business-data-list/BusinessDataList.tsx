import { DataListProps } from '../../utils/interfaces/interfaces';
import './BusinessDataList.css';

export const BusinessDataList = (props: DataListProps) => {

    const {titleSize, titleColor, subtitleSize, subtitleColor} = props;

    return (
        <div className="last-column-navbar">
            <ul className='business-data-list'>
                <li>
                    <p className='business-data-list-title' style={{fontSize: `${titleSize}rem`, color: `${titleColor}`}}>Phone</p>
                    <p className='business-data-list-subtitle' style={{fontSize: `${subtitleSize}rem`, color: `${subtitleColor}`}}>+1 232 5457</p>     
                </li>
                <li>
                    <p className="business-data-list-title" style={{fontSize: `${titleSize}rem`, color: `${titleColor}`}}>Email</p>
                    <p className='business-data-list-subtitle' style={{fontSize: `${subtitleSize}rem`, color: `${subtitleColor}`}}>info@kbwedding.com</p>     
                </li>
                <li>
                    <p className="business-data-list-title" style={{fontSize: `${titleSize}rem`, color: `${titleColor}`}}>Address</p>
                    <p className='business-data-list-subtitle' style={{fontSize: `${subtitleSize}rem`, color: `${subtitleColor}`}}>5014 S Lorem, Ipsum 1234</p>     
                </li>
            </ul>
        </div>
    )
}
