import { SocialMediaBoxProps } from '../../utils/interfaces/interfaces'
import './SocialMediaBox.css'

export const SocialMediaBox = (props: SocialMediaBoxProps) => {

    const {color, fontSize} = props;

    return (
        <>
        <h3 className='social-h3'>Follow us !</h3>
        <ul className='social-media-icons-container'>
            <li><i className='bx bxl-instagram-alt social-media-icons' style={{fontSize: `${fontSize}rem`, color: `${color}`}}></i></li>
            <li><i className='bx bxl-facebook-circle social-media-icons'  style={{fontSize: `${fontSize}rem`, color: `${color}`}}></i></li>
            <li><i className='bx bxl-twitter social-media-icons'  style={{fontSize: `${fontSize}rem`, color: `${color}`}}></i></li>
        </ul>
        </>

    )
}
