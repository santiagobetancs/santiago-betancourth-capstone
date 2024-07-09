import IndivBook from "../../components/IndivBook/IndivBook";
import "./BookComponentPage.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import 'dotenv/config';

export default function BookComponentPage() {
  const [books, setBooks] = useState({data: []});
  const [render, setRender] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const getBooks = async () => {
      const result = await axios.get(`${process.env.VITE_API_URL}${id}`);
      setBooks(result);
    };
    getBooks();
  }, [ , render]);

  return (
    <>
      <Header />
      <main className="books">
        <div className="books__container">
          <h1>See all books</h1>
          {books.data.map((book) => {
            return (
              <IndivBook
                setRender={setRender}
                render={render}
                title={book.title}
                book_image={book.book_image}
                description={book.description}
                recommendation={book.recommendation}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
