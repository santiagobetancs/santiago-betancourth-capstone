import Header from "../../components/Header/Header";
import "./WelcomePage.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import bookcase from "../../assets/images/bookcase.jpg";
import logo from "../../assets/images/StoryTime.png";
import copperhead from '../../assets/images/copperhead.jpg'
import axios from "axios";
import { useEffect, useState } from "react";

export default function WelcomePage() {
  const [books, setBooks] = useState({ data: { body: [] } });
  const [highlights, setHighlights] = useState({ data: { body: [] } });

  useEffect(() => {
    const getBooks = async () => {
      const result = await axios.get(
        `http://localhost:8080/users/nyt/audio-fiction`
      );
      setBooks(result);
    };
    getBooks();

    const getHighlight = async () => {
      const res = await axios.get(
        `http://localhost:8080/users/nyt/young-adult-paperback-monthly`
      );
      setHighlights(res);
    };
    getHighlight();
  }, []);

  return (
    <>
      <Header />
      <main className="welcome">
        <section className="welcome__banner">
          <img className="welcome__hero" src={bookcase} alt="bookcase" />
          <div className="welcome__logo">
            <img className="welcome__image" src={logo} alt="StoryTime" />
            <h3 className="welcome__title">Find your next read!</h3>
          </div>
        </section>
        <section className="welcome__carousel">
          <div className="welcome__tagline">
            <h3 className="welcome__heading">
              Get Help Picking Your Next Book
            </h3>
            <hr className="welcome__line" />
            <Link className="welcome__link" to="/signup">
              <h5 className="welcome__button">SIGN UP</h5>
            </Link>
          </div>
          <div className="welcome__slideshow">
            {books &&
              books.data.body.map((book) => {
                const { book_details } = book;

                return (
                  <div className="welcome__slide">
                    <img
                      className="welcome__mage"
                      src={book_details[0].book_image}
                      alt="book"
                    />
                  </div>
                );
              })}
          </div>
        </section>
        <section className="welcome__trending">
          <div className="welcome__tagline">
            <h3 className="welcome__heading">Trending Now 🔥</h3>
            <hr className="welcome__line welcome__line--bottom" />
            <Link className="welcome__link" to="/login">
              <h5 className="welcome__button">LOG IN</h5>
            </Link>
          </div>
          <div className="welcome__recommends">
            <div className="welcome__books">
              {highlights.data.body.slice(0, 8).map((highlight) => {

                const {book_details} = highlight

                return (
                <div className="welcome__book">
                    <img
                      className="welcome__img"
                      src={book_details[0].book_image}
                      alt="#"
                    />
                </div>
                );
              })}
            </div>
            <div className="welcome__spotlight">
                <div className="welcome__white">
                    <img className="welcome__i" src={copperhead} alt="image" />
                    <div className="welcome__details">
                        <h4 className="welcome__name">
                            Demon Copperhead
                        </h4>
                        <h6 className="welcome__author">
                            Barbara Kingsolver
                        </h6>
                        <h6 className="welcome__description">
                            Demon Copperhead is a beautifully written book about the struggles of an orphan in modern day Appalachia. The book is a modern adaption of the contemporary classic, David Copperfield by Charles Dickens, drawing on its many succesful themes. This book is sure to keep you on the edge of your seat.
                        </h6>
                    </div>
                </div>  
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
