import Header from "../../components/Header/Header";
import './HomePage.scss'
import abel from '../../assets/images/abel.png'
import prince from '../../assets/images/prince.jpg'
import { Link, useParams } from 'react-router-dom'
import Footer from "../../components/Footer/Footer";

export default function HomePage() {

    const { id } = useParams()

    return (
        <>
            <Header />
            <main className="home">
                <h1 className="home__title">Welcome, [username]</h1>
                <section className="home__options">
                    <div className="home__option">
                        <img className="home__image" src={abel} alt="profile" />
                        <Link className="home__link" to={`/profile/${id}`}>
                            <h3 className="home__subtitle">View your profile</h3>
                        </Link>
                    </div>
                    <div className="home__option">
                        <img className="home__image" src={prince} alt="recommendations" />
                        <h3 className="home__subtitle">Get a new recommendation</h3>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}