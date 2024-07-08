import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import './IndivBook.scss'

export default function IndivBook({
  title,
  book_image,
  setRender,
  render,
  author,
  recommendation,
  amazon
}) {
  const [remove, setRemove] = useState(false);
  const [more, setMore] = useState(false)
  const { id } = useParams();

  const removeLike = async (e) => {
    e.preventDefault();
    setRemove(true);
    setRender(!render);
  };

  useEffect(() => {
    const deleteBook = async () => {
      try {
        if (remove === true) {
          await axios.delete(
            `http://localhost:8080/users/books/${title}?user=${id}`
          );
          setRemove(false);
        }
      } catch (err) {
        console.error(err);
        alert("error");
      }
    };
    deleteBook();
  }, [remove]);

  return (
    <>
      <div className="profile__highlight">
        <img className="profile__book" src={book_image} alt="" />
        <div className="profile__bottom">
          
          <h4 className="profile__liked profile__liked--books">{author}</h4>
          <div className="profile__buttons">
            <h4 className="profile__button" onClick={removeLike}>X</h4>
            <h4 className={more === false ? "profile__button" : "profile__button--bottom"} onClick={() => setMore(true)}>More</h4>
            <h4 className={more === true ? "profile__button" : "profile__button--less"} onClick={() => setMore(false)}>Less</h4>
          </div>
          <h2 className={more === true ? "profile__name" : "profile__name profile__name--none"}>{title}</h2>
          <h5 className={more === true ? "profile__rec" : "profile__rec profile__rec--none"}>
            {recommendation}
          </h5>
          <a href={amazon} className="profile__link">
            <h5 className={more === true ? "profile__rec profile__rec--amz" : "profile__rec profile__rec--none"}>
              Amazon Link
            </h5>
          </a>
        </div>
      </div>
      
    </>
  );
}
