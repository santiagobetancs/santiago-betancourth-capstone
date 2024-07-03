import { Link } from "react-router-dom";
import "./BookCard.scss";
import { useState } from "react";

export default function BookCard({
  title,
  book_image,
  author,
  description,
  amazon_product_url,
}) {
  const [cmore, setCmore] = useState(false);

  const onClick = (e) => {
    e.preventDefault()
    setCmore(true);
  };

  return (
    <div key={title} className="rec__div">
      <img className="rec__img" src={book_image} alt="img" />
      <h4 className="rec__subtitle">{title}</h4>
      <Link className="rec__link">
        <h4 onClick={onClick} className="rec__cmore">
          Click here to see more info!
        </h4>
      </Link>
      {cmore && (
        <>
          <h4 className="rec__subtitle">{author}</h4>
          <h4>{description}</h4>
          <h4>{amazon_product_url}</h4>
        </>
      )}
    </div>
  );
}
