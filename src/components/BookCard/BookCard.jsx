import { Link, useParams } from "react-router-dom";
import "./BookCard.scss";
import { useState, useEffect } from "react";
import heart from "../../assets/images/heart.webp";
import axios from "axios";
import del from '../../assets/images/delete.webp'

const baseURL = import.meta.env.VITE_API_URL

export default function BookCard({
  title,
  book_image,
  author,
  description,
  amazon_product_url,
}) {
  const { id } = useParams();
  const [cmore, setCmore] = useState(false);
  const [liked, setLiked] = useState(false);
  const [remove, setRemove] = useState(false);
  const [click, setClick] = useState(false);
  const [recommendation, setRecommendation] = useState()

  const onClick = (e) => {
    e.preventDefault();
    setCmore(!cmore);
  };

  const onLike = async (e) => {
    e.preventDefault();
    setLiked(true);
    setClick(!click)
  };

  useEffect(() => {
    const chatGpt = async () => {
      const content = await axios.post(
        `${process.env.VITE_API_URL}/users/chat`, {
          title: title,
          author: author
        });
      setRecommendation(content.data)
    };
    chatGpt();
  }, [click])

  console.log(recommendation)

  useEffect(() => {
    const sendBook = async () => {
      const obj = {
        title: title,
        author: author,
        description: description,
        book_image: book_image,
        amazon_product_url: amazon_product_url,
        recommendation: recommendation,
        username: id
      };
      try {
        if (liked === true) {
          const result = await axios.post(
            `${baseURL}/users/books`,
            obj
          );
          console.log(result);
        }
      } catch (err) {
        console.error(err)
        alert("You've already liked this book!")
      }
    };
    sendBook();
  }, [click]);

  const removeLike = async (e) => {
    e.preventDefault();
    setRemove(true)
}

  useEffect(() => {
    const deleteBook = async () => {
        try {
            if (remove === true) {
                await axios.delete(`${baseURL}/users/books/${title}?user=${id}`)
                setLiked(false)
                setRemove(false)
            }
        } catch (err) {
            console.error(err)
            alert("error")
        }
    }
    deleteBook()
  }, [remove])

  return (
    <div key={title} className="rec__div">
      <img className="rec__img" src={book_image} alt="img" />
      <h4 className="rec__subtitle">{title}</h4>
      <div className="rec__block">
          <h4 onClick={onClick} className={cmore === false ? "rec__cmore" : "rec__cmore rec__cmore--none"}>
            More
          </h4>
          <h4 onClick={onClick} className={cmore === true ? "rec__cmore" : "rec__cmore rec__cmore--none"}>
            Less
          </h4>
        <img onClick={onLike} className={liked === false ? "rec__heart" : "rec__heart rec__heart--none"} src={heart} alt="heart" />
        <img onClick={removeLike} className={(liked === false) ? `rec__heart rec__heart--none` : `rec__heart`} src={del} alt="delete" />
      </div>

      {cmore && (
        <>
          <h4 className="rec__subtitle">{author}</h4>
          <p className="rec__desc">{recommendation}</p>
          <a className="rec__link" href={amazon_product_url}>
            <h4 >Find it on Amazon!</h4>
          </a>
        </>
      )}
    </div>
  );
}