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
        `${process.env.VITE_API_URL}users/signup`,
        user
      );
      console.log(result);
      if (result.status === 201) {
        navigate('/login')
      } else (
        error("fill in all fields")
      )
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
                    <input required className="signup__input" type="text" onChange={onChange} name="first_name"/>
                </label>
            </div>
            <div className="signup__box">
                <label className="signup__label">Last Name
                    <input required className="signup__input" type="text" onChange={onChange} name="last_name"/>
                </label>
            </div>
            <div className="signup__box">
                <label className="signup__label">Email
                    <input required className="signup__input" type="text" onChange={onChange} name="email"/>
                </label>
            </div>
            <div className="signup__box">
                <label className="signup__label">User Name
                    <input required className="signup__input" type="text" onChange={onChange} name="username"/>
                </label>
            </div>
            <div className="signup__box">
                <label className="signup__label">Password
                    <input required className="signup__input" type="password" onChange={onChange} name="password"/>
                </label>
            </div>
            <button type="submit" className="signup__button">
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
