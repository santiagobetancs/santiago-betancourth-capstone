import './SignupPage.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function SignupPage() {
    return (
        <>
            <Header />
            <form className="signup">
                <section className="signup__form">
                    <div className="signup__container">
                        <div className="signup__div">
                            <label className="signup__label">First Name</label>
                            <input className="signup__input" type="text" name="firstName" placeholder="William"/>
                        </div>
                        <div className="signup__div">
                            <label className="signup__label">Last Name</label>
                            <input className="signup__input" type="text" name="lastName" placeholder="Shakespeare"/>
                        </div>
                        <div className="signup__div">
                            <label className="signup__label">email</label>
                            <input className="signup__input" type="text" name="email" placeholder="wshakespeare@mail.com"/>
                        </div>
                        <div className="signup__div">
                            <label className="signup__label">Username</label>
                            <input className="signup__input" type="text" name="username" placeholder="realshakespeare"/>
                        </div>
                        <div className="signup__div">
                            <label className="signup__label">Password</label>
                            <input className="signup__input" type="text" name="password" placeholder="******"/>
                        </div>
                        <div className="signup__div">
                            <label className="signup__label">Sign-up</label>
                            <button type="submit" className="signup__button">
                                Submit
                            </button>
                        </div>
                    </div>
                </section>
            </form>
            <Footer />
        </>
    )
}