import './ProfBook.scss'

export default function ProfBook({ title, book_image }) {
  return (
    <div key={title} className="profile__like-box">
      <img
        className="profile__like-image"
        src={book_image}
        alt="liked-books"
      />
      <h6>{title}</h6>
    </div>
  );
}
