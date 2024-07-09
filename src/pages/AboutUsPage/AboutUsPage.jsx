import Header from "../../components/Header/Header";
import './AboutUsPage.scss'
import { Link } from 'react-router-dom'

export default function AboutUsPage() {
    return (
        <>
            <Header />
            <main className="about">
                <div className="about__header">
                    <h1 className="about__title">
                        About us
                    </h1>
                    <p className="about__text">
                        StoryTime prides itself on being the go-to source for finding your next book. We use real recommendations from trusted sources on the web to find you your next read. Sign up today and find out how far the power of creativity can take you. Get all the thrill of The Lord of the Rings or all the beauty of The Kite Runner without the hassle of finding a book. <br /> <br /> I started this website because I constantly found myself overwhelmed in bookstores looking for something worthwhile. I would go online to book review sites and have to read through pages on top of pages of <span className="about__italic">good</span> reviews to find one that I thought I would like. My biggest concern would be buying a book I didn't like and being stuck with it, and while $20 may not be a lot in itself, once you get to the point where you're buying a book every two weeks it adds up. What StoryTime aims to do is take away all the guesswork from selecting a book, and feeling confident that your pick has been recommended to you by world-class critics. <br /> <br /> What do you say we try it out? Click here to see for yourself:
                    </p>
                    <Link to='/signup' className="about__link">
                        <h2 className="about__button">
                            Sign Up
                        </h2>      
                    </Link>
                </div>
            </main>
        </>
    )
}