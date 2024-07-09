import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import logo from "../../assets/images/StoryTime.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.scss";
import axios from "axios";

export default function LoginPage() {

  const baseURL = import.meta.env.VITE_API_URL

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

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
  console.log(user);

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const result = await axios.post(
        `${baseURL}/users/login`,
        user
      );
      if (result) {
        sessionStorage.setItem("token", result.data.token);
        navigate(`/home/${result.data.username}`);
      }
    } catch (err) {
      console.error(err);
      alert("user not found");
    }
  };

  return (
    <>
      <Header />
      <main className="login">
        <form onSubmit={onSubmit} className="login__form">
          <section className="login__container login__container--left">
            <h2 className="login__title">Welcome Back</h2>
            <div className="login__holder">
              <div className="login__box">
                <label className="login__label">
                  User Name
                  <input
                    className="login__input"
                    type="text"
                    onChange={onChange}
                    name="username"
                    required
                  />
                </label>
              </div>
              <div className="login__box">
                <label className="login__label">
                  Password
                  <input
                    className="login__input"
                    type="password"
                    onChange={onChange}
                    name="password"
                    required
                  />
                </label>
              </div>
            </div>
            <button
              onClick={() => navigate("/login")}
              type="submit"
              className="login__button"
            >
              SUBMIT
            </button>
          </section>
          <section className="login__container login__container--right">
            <img className="login__logo" src={logo} alt="" />
          </section>
        </form>
      </main>
      <Footer />
    </>
  );
}
