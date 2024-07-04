import "./ProfilePage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import abel from "../../assets/images/abel.png";
import { useParams } from "react-router-dom"; 
import axios from "axios";
import { useState, useEffect } from "react";
import ModalComponent from "../../components/ModalComponen/ModalComponent";

export default function ProfilePage() {

  const { id } = useParams()
  const [profile, setProfile] = useState({data: []})
  const [books, setBooks] = useState({data: []})
  const [openModal, setOpenModal] = useState(false)


  useEffect(() => {
    const getProfile = async () => {
      const result = await axios.get(`http://localhost:8080/users/indiv/${id}`)
      setProfile(result.data)
    }
    getProfile()

    const getBooks = async () => {
      const result = await axios.get(`http://localhost:8080/users/books/${id}`);
      setBooks(result)
    }
    getBooks()
  }, [])

  const { first_name, last_name, email } = profile
  console.log(profile)

  if (!profile) {
    return <p>Loading...</p>
  }
  
  return (
    <>
      <ModalComponent setOpenModal={setOpenModal} openModal={openModal}/>
      <Header />
      <main className="profile">
        <section className="profile__container">
          <div className="profile__details">
            <img className="profile__image" src={abel} alt="profile_image" />
            <div className="profile__box">
              <label className="profile__label">Username</label>
              <h3 className="profile__text">{id}</h3>
            </div>
            <div className="profile__box">
              <label className="profile__label">Name</label>
              <h3 className="profile__text">{`${first_name} ${last_name}`}</h3>
            </div>
            <div className="profile__box">
              <label className="profile__label">email</label>
              <h3 className="profile__text">{email}</h3>
            </div>
          </div>
          <div className="profile__likes">
            <h3 className="profile__like-text">Liked Books</h3>
            {books.data.map((book) => {
              return (
                <div key={book.title} className="profile__like-box">
                  <img
                    className="profile__like-image"
                    src={book.book_image}
                    alt="liked-books"
                  />
                  <h6>{book.title}</h6>
                </div>
              );
            })}
            <div className="profile__like-box">
              <div className="profile__like-blank">

              </div>
              <h6>
                See more...
              </h6>
            </div>
          </div>
          <div className="profile__buttons">
            <button onClick={() => {
              setOpenModal(true)
            }}
            className="profile__button profile__button--edit">EDIT</button>
            <h3 className="profile__button profile__button--home">HOME</h3>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
