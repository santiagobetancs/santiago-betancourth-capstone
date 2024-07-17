import Header from "../../components/Header/Header";
import "./WelcomePage.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import bookcase from "../../assets/images/bookcase.jpg";
import logo from "../../assets/images/StoryTime.png";
import copperhead from "../../assets/images/copperhead.jpg";
import { useEffect, useState } from "react";

export default function WelcomePage() {

  const [tablet, setTablet] = useState()

  useEffect(() => {
    if (window.screen.width >= 1280) {
      setTablet(true)
    }
    else setTablet(false)
  }, [])

  console.log(tablet)



  const booksArray = [
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781668047071.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780316565073.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781250178633.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781668037713.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781638931799.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593441282.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781649374042.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593492918.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781635575583.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781649374172.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781635575606.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781538704431.jpg",
    },
  ];

  const highlightArray = [
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781402277832.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781728276229.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593855720.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781534467637.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781728210292.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781419760877.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9781101934715.jpg",
    },
    {
      book_image:
        "https://storage.googleapis.com/du-prd/books/images/9780593433317.jpg",
    },
  ];

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
            {booksArray.map((book) => {
              return (
                <div className="welcome__slide">
                  <img
                    className="welcome__mage"
                    src={book.book_image}
                    alt="book"
                  />
                </div>
              );
            })}
          </div>
        </section>
        <section className="welcome__trending">
          <div className="welcome__tagline welcome__tagline--bottom">
            <h3 className="welcome__heading">Trending Now 🔥</h3>
            <hr className="welcome__line welcome__line--bottom" />
            <Link className="welcome__link" to="/login">
              <h5 className="welcome__button">LOG IN</h5>
            </Link>
          </div>
          <div className="welcome__recommends">
            <div className="welcome__books">
              {highlightArray.slice(0, 4).map((book) => {
                return (
                  <div className="welcome__book">
                    <img
                      className="welcome__img"
                      src={book.book_image}
                      alt="#"
                    />
                  </div>
                )
              })}
              {tablet && highlightArray.slice(4, 8).map((book) => {
                return (
                  <div className="welcome__book">
                  <img
                    className="welcome__img"
                    src={book.book_image}
                    alt="#"
                  />
                </div>
                )
              })}
            </div>
            <div className="welcome__spotlight">
              <div className="welcome__white">
                <img className="welcome__i" src={copperhead} alt="image" />
                <div className="welcome__details">
                  <h4 className="welcome__name">Demon Copperhead</h4>
                  <h6 className="welcome__author">Barbara Kingsolver</h6>
                  <h6 className="welcome__description">
                    Demon Copperhead is a beautifully written book about the
                    struggles of an orphan in modern day Appalachia. The book is
                    a modern adaption of the contemporary classic, David
                    Copperfield by Charles Dickens, drawing on its many
                    succesful themes. This book is sure to keep you on the edge
                    of your seat.
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
