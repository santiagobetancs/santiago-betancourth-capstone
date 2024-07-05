import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function IndivBook({
  title,
  book_image,
  description,
  setRender,
  render,
  recommendation
}) {
  const [remove, setRemove] = useState(false);
  const { id } = useParams()


  const removeLike = async (e) => {
    e.preventDefault();
    setRemove(true);
    setRender(!render)
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
    <div key={title} className="profile__like-box">
      <img className="profile__like-image" src={book_image} alt="liked-books" />
      <h6>{title}</h6>
      <h6>{description}</h6>
      <h6>{recommendation}</h6>
      <h4 onClick={removeLike}>X</h4>
    </div>
  );
}
