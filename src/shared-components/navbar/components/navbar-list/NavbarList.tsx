import { NavLink } from 'react-router-dom';
import { useHomeGlobalContext } from '../../../../hooks/home/HomeContext';
import './NavbarList.css';

export const NavbarList = () => {

    const {handleNavbarClick} = useHomeGlobalContext()
    
    return (
        <ul className="navbar-list">
            <li className="navbar-li">
                <NavLink  to='/' className={({ isActive}) =>
                 isActive ? "navlink-active" : ""
                } onClick={handleNavbarClick}>
                Home
                </NavLink>
            </li>
            <li className="navbar-li">
                <NavLink to='/services' className={({ isActive}) =>
                 isActive ? "navlink-active" : ""
                } onClick={handleNavbarClick}>
                Services
                </NavLink></li>
            <li className="navbar-li">
            <NavLink to='/about' className={({ isActive}) =>
                 isActive ? "navlink-active" : ""
                } onClick={handleNavbarClick}>
                About
                </NavLink>    
            </li>
            <li className="navbar-li"><NavLink to='/contact' className={({ isActive}) =>
                 isActive ? "navlink-active" : ""
                } onClick={handleNavbarClick}>
                Contact
                </NavLink></li>
        </ul>
    )
}
