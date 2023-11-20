import { createContext, useContext, useState } from 'react';
import { ContextProp, HomeContextInterface } from '../../utils/interfaces/interfaces';

const homeContextObj = {
    isNavbarOpen: false,
    handleNavbarClick: () => {}
}

const HomeContextCreation = createContext<HomeContextInterface>(homeContextObj);

const HomeContextProvider = ({ children }: ContextProp) => {

    const [isNavbarOpen, setIsNavbarOpen] = useState<boolean>(false);

    const handleNavbarClick = () => {
        console.log('click 2')
        setIsNavbarOpen(!isNavbarOpen);
    };

    const providerValueObj = {
        isNavbarOpen,
        handleNavbarClick
    };


    return (
        <HomeContextCreation.Provider value={providerValueObj}>
            {children}
        </HomeContextCreation.Provider>
    )

}

const useHomeGlobalContext = () => {
    return useContext(HomeContextCreation);
}

export {HomeContextProvider, useHomeGlobalContext};