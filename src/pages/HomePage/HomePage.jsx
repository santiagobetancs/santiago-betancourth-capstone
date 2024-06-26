import Header from '../../components/Header/Header';
import MainBlock from '../../components/MainBlock/MainBlock';
import './HomePage.scss';
import book from '../../assets/images/book.svg'

export default function HomePage() {
    return (
        <>
            <Header />
            <main className="home">
                <MainBlock>
                    <div className='home__block'>
                        {/* <h2 className='home__intro'>
                            Welcome
                        </h2> */}
                        {/* <h4 className='home__prompt'>
                            Scroll down to find out
                        </h4> */}
                        <img className='home__book' src={book} alt="book" />
                    </div>
                </MainBlock>
                <div data-aos="fade-up" className='home__scroll'>
                    <MainBlock>
                        <div className='home__block home__block--scroll'>
                            <h2 className='home__text home__text--top'>
                                Let us help you pick your next book
                            </h2>
                            <h2 className='home__text'>
                                Log In
                            </h2>
                            <h2 className='home__text home__text--bottom'>
                                Sign Up
                            </h2>
                        </div>
                    </MainBlock>
                </div>
            </main>
        </>
    )
}