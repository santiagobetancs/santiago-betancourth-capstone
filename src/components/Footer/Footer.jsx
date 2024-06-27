import './Footer.scss'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <>
            <main className="footer">
                <Link className='footer__link' to='/aboutus'>
                    <h2 className="footer__title">
                        About Us
                    </h2>
                </Link>
            </main>
        </>
    )
}