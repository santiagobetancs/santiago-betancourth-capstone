import Header from "../../components/Header/Header";
import './NotFoundPage.scss'
import book from '../../assets/images/book.svg'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <>
            <Header />
            <main className="notfound">
                <h1 className="notfound__title">
                    Oops! Seems this page doesn't exist yet! Let's go back home
                </h1>
                <img className="notfound__book" src={book} alt="book" />
                <Link to='/' className="notfound__button">
                    <h2>
                        HOME
                    </h2>         
                </Link>
            </main>
        </>
    )
}