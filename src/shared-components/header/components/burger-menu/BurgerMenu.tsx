import { useHomeGlobalContext } from '../../../../hooks/home/HomeContext'
import './BurgerMenu.css'

export const BurgerMenu = () => {

    const {handleNavbarClick} = useHomeGlobalContext();

  

    return (
        <div className='burger-menu-container' onClick={handleNavbarClick}>
            <i className='bx bx-menu'></i>
        </div>
    )
}
