import "./Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Libro.svg";
import insta from '../../assets/images/insta.png'
import twitter from '../../assets/images/twitter.webp'
import linkedin from '../../assets/images/linkedin.png'
import orange from '../../assets/images/orange.png'
import { useParams } from "react-router-dom";

export default function Header() {

  const {id} = useParams()

  return (
    <>
      <nav className="header">
        <section className="header__container header__container--top">
          <Link className="header__link" to='/'>
            <div className="header__box">
              <img className="header__logo" src={Logo} alt="StoryTime" />
              <h4 className="header__title">Story Time</h4>
            </div>
          </Link>
          <div className="header__box header__box--right">
            <Link to='/login' className="header__link">
              <h5 className="header__button">LOG IN</h5>
            </Link>
            <Link to='/signup' className="header__link">
              <h5 className="header__button">SIGN UP</h5>
            </Link>
            <div className="header__social">
              <img className="header__media" src={insta} alt="social" />
              <img className="header__media header__media--twitter" src={twitter} alt="X" />
              <img className="header__media header__media--linkedin" src={linkedin} alt="in" />
            </div>
          </div>
        </section>
        <section className={id ? "header__container header__container--bottom" : "header__container--none"}>
          <Link to={`/home/${id}`} className="header__link">
          <div className={"header__option"}>
            <h6 className="header__text">
              Home
            </h6>
            {/* <img className="header__drop" src={orange} alt=">" /> */}
          </div>
          </Link>
          <Link to={`/profile/${id}`} className="header__link">
          <div className="header__option">
            <h6 className="header__text">
              Profile
            </h6>
            {/* <img className="header__drop" src={orange} alt=">" /> */}
          </div>
          </Link>
          <Link to={`/recommendations/${id}`} className="header__link">
          <div className="header__option">
            <h6 className="header__text">
              Recommendations
            </h6>
            {/* <img className="header__drop" src={orange} alt=">" /> */}
          </div>
          </Link>
          <Link to='/aboutus' className="header__link">
          <div className="header__option">
            <h6 className="header__text">
              About Us
            </h6>
            {/* <img className="header__drop" src={orange} alt=">" /> */}
          </div>
          </Link>
        </section>
        <section className={!id ? "header__container header__container--bottom" : "header__container--none"}>
          <Link to={`/`} className="header__link">
          <div className={"header__option"}>
            <h6 className="header__text">
              Home
            </h6>
            {/* <img className="header__drop" src={orange} alt=">" /> */}
          </div>
          </Link>
          <Link to='/aboutus' className="header__link">
          <div className="header__option">
            <h6 className="header__text">
              About Us
            </h6>
            {/* <img className="header__drop" src={orange} alt=">" /> */}
          </div>
          </Link>
          <Link to='/aboutus' className="header__link">
          <div className="header__option">
            <h6 className="header__text">
              Contact
            </h6>
            {/* <img className="header__drop" src={orange} alt=">" /> */}
          </div>
          </Link>
        </section>
      </nav>
    </>
  );
}
