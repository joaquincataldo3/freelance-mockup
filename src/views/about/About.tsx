import { FirstViewBackImage } from './components/first-view-background-image/FirstViewBackImage';
import './About.css';
import { FirstColumn } from './components/first-column/FirstColumn';
import { SecondColumn } from './components/second-column/SecondColumn';

export const About = () => {

    const imgSrc = './src/assets/about/florero.png';

    return (
        <div className='about-global-container'>
            <FirstViewBackImage src={imgSrc} />
            <main className='about-main-container'>
                <FirstColumn />
                <SecondColumn />
            </main>
        </div>
    )
}
