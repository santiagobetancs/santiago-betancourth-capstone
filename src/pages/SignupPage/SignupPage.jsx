import './SignupPage.scss'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react'
import axios from 'axios'

export default function SignupPage() {

    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: ""
    })

    const onChange = (e) => {
        try {
            e.preventDefault();
            const { name, value } = e.target
            setUser({
                ...user,
                [name]: value,
            })

        } catch (err) {
            console.error(err)
        }
    }
    console.log(user)

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const result = await axios.post("http://localhost:8080/users/signup", user)
            console.log(result)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <Header />
            <form onSubmit={onSubmit} className="signup">
                <section className="signup__form">
                    <div className="signup__container">
                        <div className="signup__div">
                            <label className="signup__label">First Name</label>
                            <input onChange={onChange} className="signup__input" type="text" name="first_name" placeholder="William"/>
                        </div>
                        <div className="signup__div">
                            <label className="signup__label">Last Name</label>
                            <input onChange={onChange} className="signup__input" type="text" name="last_name" placeholder="Shakespeare"/>
                        </div>
                        <div className="signup__div">
                            <label className="signup__label">email</label>
                            <input onChange={onChange} className="signup__input" type="text" name="email" placeholder="wshakespeare@mail.com"/>
                        </div>
                        <div className="signup__div">
                            <label className="signup__label">Username</label>
                            <input onChange={onChange} className="signup__input" type="text" name="username" placeholder="realshakespeare"/>
                        </div>
                        <div className="signup__div">
                            <label className="signup__label">Password</label>
                            <input onChange={onChange} className="signup__input" type="text" name="password" placeholder="******"/>
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