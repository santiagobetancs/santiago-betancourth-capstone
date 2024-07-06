import "./SignupPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/StoryTime.png";

export default function SignupPage() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
  });

  const onChange = (e) => {
    try {
      e.preventDefault();
      const { name, value } = e.target;
      setUser({
        ...user,
        [name]: value,
      });
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        "http://localhost:8080/users/signup",
        user
      );
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };
  console.log(user);

  return (
    <>
      <Header />
      <main className="signup">
        <form onSubmit={onSubmit} className="signup__form">
          <section className="signup__container signup__container--left">
            <h2 className="signup__title">Create Account</h2>
            <div className="signup__box">
                <label className="signup__label">First Name
                    <input className="signup__input" type="text" onChange={onChange} name="first_name"/>
                </label>
            </div>
            <div className="signup__box">
                <label className="signup__label">Last Name
                    <input className="signup__input" type="text" onChange={onChange} name="last_name"/>
                </label>
            </div>
            <div className="signup__box">
                <label className="signup__label">Email
                    <input className="signup__input" type="text" onChange={onChange} name="email"/>
                </label>
            </div>
            <div className="signup__box">
                <label className="signup__label">User Name
                    <input className="signup__input" type="text" onChange={onChange} name="username"/>
                </label>
            </div>
            <div className="signup__box">
                <label className="signup__label">Password
                    <input className="signup__input" type="password" onChange={onChange} name="password"/>
                </label>
            </div>
            <button onClick={() => navigate('/login')} type="submit" className="signup__button">
                SUBMIT
            </button>
          </section>
          <section className="signup__container signup__container--right">
                <img
                className="signup__logo"
                src={logo}
                alt=""
                />
          </section>
        </form>
      </main>
      <Footer />
    </>
  );
}
