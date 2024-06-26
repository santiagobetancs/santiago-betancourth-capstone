import Header from '../../components/Header/Header';
import MainBlock from '../../components/MainBlock/MainBlock';
import './HomePage.scss';

export default function HomePage() {
    return (
        <>
            <Header />
            <main className="home">
                <MainBlock>

                </MainBlock>
                <h1 data-aos="fade-left" className='home__title'>
                    StoryTime
                </h1>
            </main>
        </>
    )
}