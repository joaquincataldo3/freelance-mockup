import { FirstViewBackImage } from '../../shared-components/first-view-background-image/FirstViewBackImage';
import './About.css';
import { FirstColumn } from './components/first-column/FirstColumn';
import { SecondColumn } from './components/second-column/SecondColumn';

export const About = () => {

    return (
        <div className='about-global-container'>
            <FirstViewBackImage src='florero.png' />
            <main className='about-main-container'>
                <FirstColumn />
                <SecondColumn />
            </main>
        </div>
    )
}
