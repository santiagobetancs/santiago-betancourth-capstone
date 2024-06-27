import './ProfilePage.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function ProfilePage() {
    return (
        <>
            <Header />
            <main className='profile'>
                <section className='profile__container'>
                    <div className='profile__details'>
                        <img className='profile__image' src="#" alt="profile_image" />
                        <div className='profile__box'>
                            <label className='profile__label'>
                                Username
                            </label>
                            <h3 className='profile__text'>
                                [username]
                            </h3>
                        </div>
                        <div className='profile__box'>
                            <label className='profile__label'>
                                Name
                            </label>
                            <h3 className='profile__text'>
                                [Full Name]
                            </h3>
                        </div>
                        <div className='profile__box'>
                            <label className='profile__label'>
                                email
                            </label>
                            <h3 className='profile__text'>
                                [email]
                            </h3>
                        </div>
                    </div>
                    <div className='profile__likes'>
                        <img className='profile__like-image' src="#" alt="liked-books" />
                        <h3 className='profile__like-text'>
                            Liked Books
                        </h3>
                    </div>
                    <div className='profile__buttons'>
                        <h3 className='profile__button profile__button--edit'>
                            EDIT
                        </h3>
                        <h3 className='profile__button profile__button--home'>
                            HOME
                        </h3>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}