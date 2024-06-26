import Header from "../../components/Header/Header";
import MainBlock from "../../components/MainBlock/MainBlock";
import './LoginPage.scss'

export default function LoginPage() {
    return (
        <>
            <Header />
            <form className="login">
                <section className="login__form">
                    <div className="login__container">
                        <div className="login__div">
                            <label className="login__label">Username</label>
                            <input className="login__input" type="text" name="username" placeholder="realshakespeare"/>
                        </div>
                        <div className="login__div">
                            <label className="login__label">Password</label>
                            <input className="login__input" type="text" name="password" placeholder="******"/>
                        </div>
                        <button type="submit" className="login__button">
                        LOGIN
                        </button>
                    </div>

                </section>
            </form>
        </>
    )
}