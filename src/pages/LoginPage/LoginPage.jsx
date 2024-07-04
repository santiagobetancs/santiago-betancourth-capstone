import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useState } from "react"; 
import { useNavigate } from "react-router-dom";
import './LoginPage.scss';
import axios from 'axios';

export default function LoginPage() {

    const [user, setUser] = useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate()

    const onChange = (e) => {
        try {
            e.preventDefault();
            const { name, value } = e.target;
            setUser({
                ...user,
                [name]: value
            })
        } catch (err) {
            console.error(err)
        }
    }
    console.log(user)

    const onSubmit = async (e) => {
        try {
            e.preventDefault()
            const result = await axios.post("http://localhost:8080/users/login", user)
            if (result) {
                sessionStorage.setItem("token", result.data.token)
                navigate(`/home/${result.data.username}`)
            }
        } catch (err) {
            console.error(err)
            alert("user not found")
        }
    }

    return (
        <>
            <Header />
            <form onSubmit={onSubmit} className="login">
                <section className="login__form">
                    <div className="login__container">
                        <div className="login__div">
                            <label className="login__label">Username</label>
                            <input onChange={onChange} className="login__input" type="text" name="username" placeholder="realshakespeare" required/>
                        </div>
                        <div className="login__div">
                            <label className="login__label">Password</label>
                            <input onChange={onChange}  className="login__input" type="text" name="password" placeholder="*********" required/>
                        </div>
                        <button type="submit" className="login__button">
                        LOGIN
                        </button>
                    </div>
                </section>
            </form>
            <Footer />
        </>
    )
}