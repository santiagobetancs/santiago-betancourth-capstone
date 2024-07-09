import './Footer.scss'
import logo from '../../assets/images/StoryTime.png'
import insta from '../../assets/images/insta.png'
import twitter from '../../assets/images/twitter.webp'
import linkedin from '../../assets/images/linkedin.png'
import { Link } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <Link className='footer__link' to='/aboutus'>
                    <div className='footer__box'>
                        <img className='footer__logo' src={logo} alt="StoryTime" />
                        <h3 className='footer__title'>
                            Find your next read!
                        </h3>
                    </div>
                </Link>
                <div className='footer__social'>
                    <FaInstagram className="footer__icons"/>
                    <FaXTwitter className="footer__icons"/>
                    <FaLinkedin className="footer__icons"/>
                </div>
            </footer>
        </>
    )
}