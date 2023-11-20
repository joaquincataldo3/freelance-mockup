import { NavLink } from 'react-router-dom';
import './NavbarList.css';

export const NavbarList = () => {
    return (
        <ul className="navbar-list">
            <li className="navbar-li">
                <NavLink  to='/' className={({ isActive}) =>
                 isActive ? "navlink-active" : ""
                }>
                Home
                </NavLink>
            </li>
            <li className="navbar-li">
                <NavLink to='/services' className={({ isActive}) =>
                 isActive ? "navlink-active" : ""
                }>
                Services
                </NavLink></li>
            <li className="navbar-li">
            <NavLink to='/about' className={({ isActive}) =>
                 isActive ? "navlink-active" : ""
                }>
                About
                </NavLink>    
            </li>
            <li className="navbar-li"><NavLink to='/contact' className={({ isActive}) =>
                 isActive ? "navlink-active" : ""
                }>
                Contact
                </NavLink></li>
        </ul>
    )
}
