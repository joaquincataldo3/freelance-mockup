import logo from '../../assets/logo/main-logo-white.png';
import logoDark from '../../assets/logo/main-logo-dark.png'
import './LogoContainer.css'
import { LogoProps } from '../../utils/interfaces/interfaces';

export const LogoContainer = (props: LogoProps) => {

    const {color} = props;

    return (
        <div className="img-container">
            <img src={color === 'dark' ? logo : logoDark} alt="main-logo-wedding" />
        </div>
    )
}
