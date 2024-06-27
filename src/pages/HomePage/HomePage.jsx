import Header from '../../components/Header/Header';
import MainBlock from '../../components/MainBlock/MainBlock';
import './HomePage.scss';
import book from '../../assets/images/book.svg'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <>
            <Header />
            <main className="home">
                <MainBlock>
                    <div className='home__block'>
                        <img className='home__book' src={book} alt="book" />
                    </div>
                </MainBlock>
                <div data-aos="fade-up" className='home__scroll'>
                    <MainBlock>
                        <div className='home__block home__block--scroll'>
                            <h2 className='home__text home__text--top home__text--mobile'>
                                Pick your next book
                            </h2>
                            <h2 className='home__text home__text--top home__text--tab'>
                                Let us help you pick your next book
                            </h2>
                            <Link className='home__text' to='/login'>
                                <h2>
                                    Log In
                                </h2>
                            </Link>
                            <Link className='home__text home__text--bottom' to='/signup'>
                                <h2 >
                                    Sign Up
                                </h2>               
                            </Link>
                        </div>
                    </MainBlock>
                </div>
            </main>
        </>
    )
}