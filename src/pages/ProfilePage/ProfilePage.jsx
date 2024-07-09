import "./ProfilePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import abel from "../../assets/images/abel.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ModalComponent from "../../components/ModalComponent/ModalComponent";
import IndivBook from "../../components/IndivBook/IndivBook";
import edit from '../../assets/images/edit.png';

export default function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState({ data: [] });
  const [books, setBooks] = useState({ data: [] });
  const [openModal, setOpenModal] = useState(false);
  const [render, setRender] = useState(false);
  const [more, setMore] = useState(false);

  useEffect(() => {
    try {
      const getProfile = async () => {
        const result = await axios.get(
          `${process.env.VITE_API_URL}/users/indiv/${id}`
        );
        setProfile(result.data);
      };
      getProfile();
    } catch (err) {
      console.error(err);
    }

    try {
      const getBooks = async () => {
        const result = await axios.get(
          `${process.env.VITE_API_URL}/users/books/${id}`
        );
        setBooks(result);
      };
      getBooks();
    } catch (err) {
      console.error(err);
    }
  }, [id, openModal, render]);

  return (
    <>
      <ModalComponent
        profile={profile}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      <Header />
      <main className="profile">
        <section className="profile__container">
          <img className="profile__image" src={abel} alt="profile_image" />
          <div className="profile__details">
            <h4 className="profile__liked">Profile</h4>
            <h1 className="profile__title">{id}</h1>
            <h4 className="profile__liked">
              {`${books.data.length} liked books`}
            </h4>
            <div onClick={() => setOpenModal(true)} className="profile__edit">
              <img className="profile__pencil" src={edit} alt="edit" />
              <h4 className="profile__subtitle">
                Edit
              </h4>
            </div>
          </div>
        </section>
        <section
          className={
            books.data.length === 0
              ? "profile__carousel profile__carousel--none"
              : "profile__carousel"
          }
        >
          <div className="profile__books">
            {books.data.slice(0, 4).map((book) => {
              return (
                <IndivBook
                  recommendation={book.recommendation}
                  render={render}
                  setRender={setRender}
                  title={book.title}
                  book_image={book.book_image}
                  author={book.author}
                  amazon={book.amazon_product_url}
                />
              );
            })}
          </div>
          <div className={more === true ? "profile__books" : "profile__books profile__books--none"}>
            {books.data.slice(4).map((book) => {
                  return (
                    <IndivBook
                      recommendation={book.recommendation}
                      render={render}
                      setRender={setRender}
                      title={book.title}
                      book_image={book.book_image}
                      author={book.author}
                    />
                  );
                })}
          </div>
          <div className={books.data.length > 4 ? "profile__box" : "profile__box profile__box--none"}>
            <h4
              onClick={() => setMore(true)}
              className={
                more === true
                  ? "profile__more--none"
                  : "profile__more"
              }
            >
              Show More
            </h4>
            <h4
              onClick={() => setMore(false)}
              className={more === true ? "profile__less" : "profile__less--none"}
            >
              See Less
            </h4>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
