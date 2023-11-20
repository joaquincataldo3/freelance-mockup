import { useHomeGlobalContext } from '../../hooks/home/HomeContext';
import { LogoContainer } from '../logo-container/LogoContainer';
import { NavbarList } from './components/navbar-list/NavbarList';
import { SocialMediaBox } from '../social-media-box/SocialMediaBox';
import './Navbar.css';
import { BusinessDataList } from '../business-data-list/BusinessDataList';

export const Navbar = () => {

    const { isNavbarOpen, handleNavbarClick } = useHomeGlobalContext();

    return (
        <nav className={`navbar ${isNavbarOpen && 'navbar-active'}`}>
            <div className="first-column-navbar">
                <div className="close-navbar-icon-container">
                    <i className='bx bx-x close-navbar' onClick={handleNavbarClick}></i>
                </div>
                <LogoContainer color='white'/>
                <NavbarList />
            </div>
            <div className="second-column-navbar">
            <BusinessDataList titleColor='#a2783a' titleSize='1' subtitleColor='black' subtitleSize='0.875'/>           
            <SocialMediaBox color='var(--light-black)' fontSize='1.8' />
            </div>
            
        </nav>
    )
}
