import Header from '../../components/Header/Header';
import MainBlock from '../../components/MainBlock/MainBlock';
import './WelcomePage.scss';
import book from '../../assets/images/book.svg'
import { Link } from 'react-router-dom'

export default function WelcomePage() {
    return (
        <>
            <Header />
            <main className="welcome">
                <MainBlock>
                    <Link to='/aboutus'>
                        <div className='welcome__block'>
                            <img className='welcome__book' src={book} alt="book" />
                        </div>      
                    </Link>
                </MainBlock>
                <div data-aos="fade-up" className='welcome__scroll'>
                    <MainBlock>
                        <div className='welcome__block welcome__block--scroll'>
                            <h2 className='welcome__text welcome__text--top welcome__text--mobile'>
                                Pick your next book
                            </h2>
                            <h2 className='welcome__text welcome__text--top welcome__text--tab'>
                                Let us help you pick your next book
                            </h2>
                            <Link className='welcome__text' to='/login'>
                                <h2>
                                    Log In
                                </h2>
                            </Link>
                            <Link className='welcome__text welcome__text--bottom' to='/signup'>
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