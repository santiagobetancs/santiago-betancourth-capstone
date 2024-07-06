import './Footer.scss'
import logo from '../../assets/images/StoryTime.png'
import insta from '../../assets/images/insta.png'
import twitter from '../../assets/images/twitter.webp'
import linkedin from '../../assets/images/linkedin.png'
import { Link } from 'react-router-dom'

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
                    <img className='footer__media' src={insta} alt="" />
                    <img className='footer__media footer__media--twitter' src={twitter} alt="" />
                    <img className='footer__media footer__media--linkedin' src={linkedin} alt="" />
                </div>
            </footer>
        </>
    )
}